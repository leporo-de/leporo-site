# leporo-site

Statische Website der Leporo GmbH auf Basis von [Astro](https://astro.build/), veröffentlicht über GitHub Pages.

## Entwicklung

```bash
npm install
npm run dev
```

Der Produktions-Build wird mit `npm run build` erzeugt. Die Kontaktseite verwendet bewusst nur einen `mailto:`-Link und benötigt weder Backend noch Secrets.

Der Produktions-Build führt `npm run privacy:check` aus. Der Check schlägt fehl, wenn generierte Seiten Skripte, iframes, Formulare, Zugriffe auf Browser-Speicher, bekannte Tracker oder extern geladene Ressourcen enthalten. Damit bleibt das statische, einwilligungsfreie Auslieferungsmodell erhalten.

## Deployment

- Pull Requests: Format-, Typ- und Build-Prüfung
- `main`: automatisches Deployment über GitHub Actions auf GitHub Pages
- Produktion: `https://leporo.de/`

Für die spätere Custom Domain `leporo.de`:

1. DNS auf GitHub Pages umstellen.
2. Die Custom Domain in den Repository-Pages-Einstellungen setzen.
3. `public/CNAME` mit `leporo.de` ergänzen.
4. GitHub stellt automatisch ein HTTPS-Zertifikat für `leporo.de` und `www.leporo.de` bereit.

## Vor Go-live

- Angaben in Impressum und Kontaktdaten geschäftlich prüfen.
- Fehlende historische Bild- und Logodateien ggf. durch aktuelle Assets ersetzen.

## Herkunft

Texte und Unternehmensangaben wurden aus dem öffentlich archivierten früheren Auftritt rekonstruiert und redaktionell für eine moderne, statische Website aufbereitet. Das vollständige Wayback-Rettungspaket liegt getrennt vom Repository im lokalen OpenClaw-Archiv.
