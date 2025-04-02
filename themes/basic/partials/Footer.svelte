<script lang="ts">
	import { website } from 'config/website.js';
	import Cite from '../components/Cite.svelte';
</script>

<footer>
	<Cite />
	<div class="flex flex-col items-center justify-center w-full px-4 py-6 mx-auto">
		<p class="text-sm text-center text-gray-700 md:text-left md:mb-0">
			{website.title}
		</p>
		<div class="mt-1 flex flex-col md:flex-row w-full space-x-2 items-center justify-center">
			<p class="text-xs text-center text-gray-600 md:text-left md:mb-0">
				Icons by <a
					id="iconoir"
					href="https://iconoir.com"
					target="_blank"
					rel="noopener noreferrer"
					class="underline">iconoir</a
				>
				via
				<a
					id="svelte-iconoir"
					href="https://www.npmjs.com/package/@indaco/svelte-iconoir"
					target="_blank"
					rel="noopener noreferrer"
					class="underline">svelte-iconoir</a
				>
			</p>
		</div>
	</div>
</footer>
