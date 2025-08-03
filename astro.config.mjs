import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compressor from 'astro-compressor';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://carlosjorger.github.io',
	integrations: [
		tailwind(),
		compressor({
			gzip: false,
			brotli: true,
		}),
		sitemap(),
	],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
	},
	routing: {
		prefixDefaultLocale: false,
	},
});
