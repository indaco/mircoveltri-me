<script>
	import ExternalLink from '$components/_ExternalLink.svelte';
	import { website } from '$config/website.js';
	import { SvelteComponent } from 'svelte';
	import Cite from '../components/Cite.svelte';
</script>

<footer aria-labelledby="footerHeading">
	<h2 id="footerHeading" class="sr-only">Footer</h2>
	<Cite />
	<footer class="flex flex-col items-center justify-center w-full px-4 py-6 mx-auto">
		<p class="text-sm text-center text-gray-700 md:text-left md:mb-0">
			{website.title}
		</p>
		<div class="mt-8 flex flex-col md:flex-row w-full space-x-2 items-center justify-center">
			<p class="text-xs text-center text-gray-600 md:text-left md:mb-0">
				Powered by <ExternalLink name="sveltekit" url="https://kit.svelte.dev"
					>SvelteKit</ExternalLink
				> and styled with <ExternalLink name="tailwindcss" url="https://tailwindcss.com"
					>Tailwind CSS.</ExternalLink
				>
			</p>
			<p class="text-xs text-center text-gray-600 md:text-left md:mb-0">
				Icons by <ExternalLink name="icnoir" url="https://iconoir.com">Iconoir</ExternalLink> via <ExternalLink
					name="svelte-iconoir"
					url="https://www.npmjs.com/package/@indaco/svelte-iconoir">Svelte-Iconor</ExternalLink
				>
			</p>
		</div>
	</footer>
</footer>
