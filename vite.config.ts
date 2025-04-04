import { resolve, join, dirname } from 'node:path';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file = fileURLToPath(new URL('package.json', import.meta.url));
const json = readFileSync(file, 'utf8');
const pkg = JSON.parse(json);

const config = defineConfig({
	clearScreen: false,
	define: {
		'process.env.VITE_SVELTEKIT_VERSION': JSON.stringify(
			String(pkg.devDependencies['@sveltejs/kit'])
		),
		'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toISOString())
	},
	server: {
		port: 5173,
		fs: {
			// Allow serving files from one level up to the project root
			// Alternatevaly set server.fs.strict to false
			allow: ['..']
		}
	},
	resolve: {
		alias: {
			$sveltin: resolve(join(__dirname, './src/sveltin')),
			$config: resolve(join(__dirname, './config')),
			$content: resolve(join(__dirname, './content')),
			$themes: resolve(join(__dirname, './themes'))
		}
	},
	plugins: [tailwindcss(), sveltekit()]
});

export default config;
