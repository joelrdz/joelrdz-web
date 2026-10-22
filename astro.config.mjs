// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://joelrdz.com",
	trailingSlash: "always",
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Atkinson Hyperlegible Next",
			cssVariable: "--font-atkinson-sans",
			weights: [400, 500, 600],
		},
		{
			provider: fontProviders.fontsource(),
			name: "Atkinson Hyperlegible Mono",
			cssVariable: "--font-atkinson-mono",
			fallbacks: ["monospace"],
		},
	],
	integrations: [sitemap()],
});
