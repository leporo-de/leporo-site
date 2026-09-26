import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://leporo.de",
  output: "static",
  trailingSlash: "always",
  integrations: [sitemap()],
});
