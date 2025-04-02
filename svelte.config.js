import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

const sveltinJsonFile = fileURLToPath(new URL('sveltin.json', import.meta.url));
const sveltinJson = readFileSync(sveltinJsonFile, 'utf8');
const { sveltekit } = JSON.parse(sveltinJson);

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte'],
	preprocess: [
		sveltePreprocess({
			preserve: ['ld+json']
		})
	],
	kit: {
		alias: {
			config: './config',
			'config/*': './config/*',
			themes: './themes',
			'themes/*': './themes/*'
		},
		adapter: adapter({
			pages: sveltekit.adapter.pages,
			assets: sveltekit.adapter.assets,
			fallback: sveltekit.adapter.fallback,
			precompress: sveltekit.adapter.precompress,
			strict: sveltekit.adapter.strict
		}),
		prerender: {
			crawl: true,
			entries: ['*']
		}
	}
};

export default config;
