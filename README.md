# leporo-site

Statische Website der Leporo GmbH auf Basis von [Astro](https://astro.build/) und Cloudflare Pages. Der einzige dynamische Teil ist das Kontaktformular unter `functions/api/contact.ts`.

## Entwicklung

```bash
npm install
npm run dev
```

Der Astro-Entwicklungsserver zeigt die statischen Seiten. Um zusätzlich die Cloudflare Pages Function zu testen:

```bash
npm run build
cp .env.example .dev.vars
npm run preview
```

Cloudflare stellt offizielle Turnstile-Testschlüssel bereit. Der Mailversand benötigt lokal ein Remote-/Mock-Binding oder wird erst in der Cloudflare-Vorschau vollständig getestet.

## Deployment auf Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Build directory: `dist`
- Node.js: aktuelle LTS-Version

### Einmalige Cloudflare-Konfiguration

1. Repository als Pages-Projekt verbinden.
2. `leporo.de` als Domain im Cloudflare-Konto verwalten und als Custom Domain verbinden.
3. Turnstile-Widget für `leporo.de` anlegen.
4. Build-Variable `PUBLIC_TURNSTILE_SITE_KEY` setzen.
5. Verschlüsseltes Function-Secret `TURNSTILE_SECRET_KEY` setzen.
6. Cloudflare Email Service für `leporo.de` onboarden; `info@leporo.de` als Zieladresse verifizieren.
7. Den `EMAIL`-Send-Binding aus `wrangler.jsonc` übernehmen bzw. im Dashboard prüfen.

`CONTACT_TO` und `CONTACT_FROM` sind standardmäßig auf `info@leporo.de` und `website@leporo.de` gesetzt.

## Vor Go-live

- Angaben in Impressum und Kontaktdaten geschäftlich prüfen.
- Datenschutzerklärung rechtlich prüfen und die konkrete Cloudflare-Konfiguration ergänzen.
- Reale Turnstile-Schlüssel hinterlegen.
- Kontaktformular in der Cloudflare Preview vollständig testen.
- Fehlende historische Bild- und Logodateien ggf. durch aktuelle Assets ersetzen.

## Herkunft

Texte und Unternehmensangaben wurden aus dem öffentlich archivierten früheren Auftritt rekonstruiert und redaktionell für eine moderne, statische Website aufbereitet. Das vollständige Wayback-Rettungspaket liegt getrennt vom Repository im lokalen OpenClaw-Archiv.
