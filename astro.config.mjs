import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  output: "static",
  adapter: netlify(),
  integrations: [
    sanity({
      projectId: "liw3qu8s",
      dataset: "production",
      // Set useCdn to false if you"re building statically.
      useCdn: false,
      // Optional: log server-side Sanity client requests.
      // Modes: "dev" | "build" | "always"
      logClientRequests: "dev",
      studioBasePath: "/admin",
    }),
    react()
  ],
});