import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: process.env.SITE_URL || "https://leporo-de.github.io",
  base: process.env.BASE_PATH || "/leporo-site",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
