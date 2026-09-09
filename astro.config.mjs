// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Outfit",
			cssVariable: "--font-outfit",
			fallbacks: ["sans-serif"],
			weights: ["100 900"],
			styles: ["italic", "normal"],
		},
	],
	// site: "http://localhost:4321",
	trailingSlash: "never",
	vite: {
		plugins: [tailwindcss()],
	},
});
