import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compressor from 'astro-compressor';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkMdxImages from 'remark-mdx-images';

export default defineConfig({
	site: 'https://carlosjorger.github.io',
	integrations: [
		tailwind(),
		compressor({
			gzip: false,
			brotli: true,
		}),
		sitemap(),
		mdx({
			remarkPlugins: [remarkMdxImages],
		}),
	],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
	},
	routing: {
		prefixDefaultLocale: false,
	},
});
