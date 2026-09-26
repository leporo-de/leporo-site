interface SendEmailBinding {
  send(message: {
    to: string;
    from: string;
    subject: string;
    text: string;
    replyTo?: { email: string; name?: string };
  }): Promise<{ messageId: string }>;
}

interface Env {
  EMAIL: SendEmailBinding;
  TURNSTILE_SECRET_KEY: string;
  CONTACT_TO: string;
  CONTACT_FROM: string;
}

type TurnstileResult = {
  success: boolean;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

const json = (body: Record<string, unknown>, status = 200) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

const value = (data: FormData, key: string, max: number) => {
  const raw = data.get(key);
  return typeof raw === "string" ? raw.trim().slice(0, max) : "";
};

const isEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const fetchSite = request.headers.get("Sec-Fetch-Site");
  if (fetchSite === "cross-site")
    return json({ success: false, message: "Ungültige Anfrage." }, 403);

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return json({ success: false, message: "Ungültige Formulardaten." }, 400);
  }

  // Bots commonly fill this hidden field. Return success without sending mail.
  if (value(data, "companyWebsite", 200))
    return json({
      success: true,
      message: "Vielen Dank. Ihre Nachricht wurde gesendet.",
    });

  const firstName = value(data, "firstName", 80);
  const lastName = value(data, "lastName", 80);
  const email = value(data, "email", 254);
  const phone = value(data, "phone", 50);
  const message = value(data, "message", 5000);
  const privacy = value(data, "privacy", 20);
  const turnstileToken = value(data, "cf-turnstile-response", 2048);

  if (
    !firstName ||
    !lastName ||
    !isEmail(email) ||
    !message ||
    privacy !== "accepted"
  ) {
    return json(
      {
        success: false,
        message: "Bitte füllen Sie alle Pflichtfelder korrekt aus.",
      },
      400,
    );
  }
  if (!env.TURNSTILE_SECRET_KEY || !turnstileToken) {
    return json(
      {
        success: false,
        message: "Die Sicherheitsprüfung fehlt. Bitte laden Sie die Seite neu.",
      },
      400,
    );
  }

  const validation = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: request.headers.get("CF-Connecting-IP") || undefined,
      }),
    },
  );
  const result = (await validation.json()) as TurnstileResult;
  if (!result.success || (result.action && result.action !== "contact")) {
    return json(
      {
        success: false,
        message:
          "Die Sicherheitsprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
      },
      403,
    );
  }

  const contactTo = env.CONTACT_TO || "info@leporo.de";
  const contactFrom = env.CONTACT_FROM || "website@leporo.de";
  try {
    await env.EMAIL.send({
      to: contactTo,
      from: contactFrom,
      replyTo: { email, name: `${firstName} ${lastName}` },
      subject: `Website-Anfrage von ${firstName} ${lastName}`,
      text: [
        "Neue Anfrage über leporo.de",
        "",
        `Name: ${firstName} ${lastName}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone || "nicht angegeben"}`,
        "",
        "Nachricht:",
        message,
      ].join("\n"),
    });
  } catch (error) {
    console.error("Contact email failed", error);
    return json(
      {
        success: false,
        message:
          "Die Nachricht konnte gerade nicht gesendet werden. Bitte nutzen Sie E-Mail oder Telefon.",
      },
      502,
    );
  }

  return json({
    success: true,
    message: "Vielen Dank. Ihre Nachricht wurde gesendet.",
  });
};

export const onRequest: PagesFunction<Env> = async (context) => {
  if (context.request.method === "POST") return onRequestPost(context);
  return json({ success: false, message: "Methode nicht erlaubt." }, 405);
};
