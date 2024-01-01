import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import compressor from 'astro-compressor';

// https://astro.build/config
// TODO: add internationalization
export default defineConfig({
	site: 'https://carlosjorger.github.io',
	integrations: [tailwind(), compressor({ gzip: false, brotli: true })],
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
	},
	routing: {
		prefixDefaultLocale: false,
	},
});
