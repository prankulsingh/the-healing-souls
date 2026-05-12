import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL ?? "https://the-healing-souls.local";
const base = process.env.PUBLIC_BASE_PATH ?? "";

export default defineConfig({
  site,
  base,
  trailingSlash: "never",
  integrations: [sitemap()],
});
