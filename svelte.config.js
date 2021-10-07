import sveltePreprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';
//import netlifyAdapter from '@sveltejs/adapter-netlify'


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		adapter: staticAdapter(),
		/*prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: ['*'],
		},*/

		// Comment the paths if wants to run in dev mode.
		paths: {
			base: '',
			assets: ''
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: ['svelte-hmr']
			}
		}

	}
};

export default config;
