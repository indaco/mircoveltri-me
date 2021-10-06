import path from 'path';

import { mdsvex } from 'mdsvex';
import { mdsvexConfig } from './mdsvex.config.js';

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		mdsvex(mdsvexConfig),
		preprocess({
			postcss: true,
			preserve: ['ld+json']
		})
	],
	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$config: path.resolve('config'),
					$content: path.resolve('content'),
					$data: path.resolve('src/data'),
					$lib: path.resolve('src/lib'),
					$partials: path.resolve('src/partials'),
					$components: path.resolve('src/components'),
					$theme: path.resolve('src/themes')
				}
			},
			optimizeDeps: {
				include: ['@indaco/svelte-iconoir']
			}
		}
	}
};

export default config;
