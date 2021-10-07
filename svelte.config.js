import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		adapter: adapter(),
		appDir: 'internal',

		prerender: {
			entries: ["/"]
		},

		// Comment the paths if wants to run in dev mode.
		paths: {
			base: '',
			assets: ''
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			optimizeDeps: {
				include: ['string-strip-html', 'lodash.isplainobject', 'lodash.trim', 'lodash.clonedeep', 'lodash.without', 'html-entities']
			}
		}

	}
};

export default config;
