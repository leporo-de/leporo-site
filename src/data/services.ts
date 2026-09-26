export type Service = {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  intro: string;
  points: string[];
  promise: string;
};

export const services: Service[] = [
  {
    slug: "inventarsanierung",
    kicker: "Nach Brand- und Wasserschäden",
    title: "Inventarsanierung",
    summary:
      "Effiziente Reinigung und Wiederaufbereitung von Möbeln, Schrankinhalten und Räumen.",
    intro:
      "Wir beseitigen Schäden und Gerüche mit dem Ziel, Werte zu bewahren und Inventar wirtschaftlich wieder nutzbar zu machen.",
    points: [
      "Reinigung von Möbeln, Schrankinhalten und Räumen",
      "Geruchsbeseitigung nach Brand- und Wasserschäden",
      "Schnelle, zuverlässige und partnerschaftliche Abwicklung",
    ],
    promise: "Wir reinigen, was Ihnen am Herzen liegt.",
  },
  {
    slug: "aktensanierung",
    kicker: "Dokumente in sicheren Händen",
    title: "Aktensanierung",
    summary:
      "Komplettlösungen für beschädigte Akten – von der Abholung bis zur Digitalisierung.",
    intro:
      "Nach einem Schaden zählt jedes Dokument. Wir organisieren die sichere Abholung, professionelle Bearbeitung und strukturierte Rückgabe.",
    points: [
      "Schnelle und sichere Abholung direkt vor Ort",
      "Digitalisierung oder Kopierservice nach Bedarf",
      "Sichere Rückgabe und versiegelte Aufbewahrung der Originale",
    ],
    promise: "Sicherheit und Sorgfalt für Ihre Dokumente.",
  },
  {
    slug: "inventuren",
    kicker: "Präzision und Zuverlässigkeit",
    title: "Inventuren",
    summary:
      "Sorgfältige Bestandsaufnahme mit effizienter Planung und strukturierter Datenübergabe.",
    intro:
      "Von der Anforderungsaufnahme bis zur fertigen Inventur begleiten wir den gesamten Ablauf transparent und verlässlich.",
    points: [
      "Beratung und Planung im Erstgespräch",
      "Präzise Erfassung Ihrer Bestände",
      "Verlässliche, strukturierte Datenübergabe",
    ],
    promise: "Klare Abläufe, belastbare Ergebnisse.",
  },
  {
    slug: "sim-kartentausch",
    kicker: "Europaweit. Schnell. Effizient.",
    title: "SIM-Kartentausch an Ladestationen",
    summary:
      "Projektplanung, Routenoptimierung und Austausch von SIM-Karten an E-Auto-Ladesäulen.",
    intro:
      "Sie geben die Standorte vor – wir übernehmen Planung, Durchführung und transparente Kommunikation in Deutschland und Europa.",
    points: [
      "Kostengünstige Routenplanung",
      "SIM-Kartentausch und Anpassung der APN-Einstellungen",
      "Projektmanagement aus einer Hand",
    ],
    promise: "Optimierte Abläufe für minimale Projektkosten.",
  },
  {
    slug: "bueroreinigung",
    kicker: "Regelmäßig und zuverlässig",
    title: "Büroreinigung",
    summary:
      "Saubere Arbeitsplätze, Küchen und Sanitärbereiche – abgestimmt auf Ihren Rhythmus.",
    intro:
      "Wir klären einmal Ihren Bedarf und sorgen anschließend zuverlässig für dauerhaft saubere Büroräume.",
    points: [
      "Flexible Reinigungsintervalle nach Bedarf",
      "Hygiene in Küche und Sanitärbereichen",
      "Verlässliches Personal und klare Abstimmung",
    ],
    promise: "Einmal beauftragen – dauerhaft sauber.",
  },
];
