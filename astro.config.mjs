import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// Import /serverless for a Serverless SSR site
import vercelServerless from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercelServerless(),
});
