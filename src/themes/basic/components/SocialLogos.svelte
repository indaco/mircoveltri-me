<script>
	import Iconoir, { Twitter, Linkedin, Facebook, Instagram, Github } from '@indaco/svelte-iconoir';
	import ExternalLink from '$components/_ExternalLink.svelte';
	import { isNotEmpty } from '$lib/utils/strings.js';

	export let data;

	function getIconComponent(name) {
		switch (name) {
			case 'twitter':
				return Twitter;
				break;
			case 'linkedin':
				return Linkedin;
				break;
			case 'facebook':
				return Facebook;
				break;
			case 'instagram':
				return Instagram;
				break;
			case 'github':
				return Github;
				break;
			default:
				break;
		}
	}
</script>

<div class="flex flex-row justify-center mx-auto space-x-3 text-gray-700">
	{#each Object.entries(data) as [name, url]}
		{#if isNotEmpty(url)}
			<ExternalLink
				{name}
				{url}
				class="flex items-center p-2 uppercase transition duration-500 ease-in-out border border-gray-300 rounded-full  hover:bg-indigo-500 hover:text-white"
			>
				<Iconoir icon={getIconComponent(name)} alt={name} size="24" />
			</ExternalLink>
		{/if}
	{/each}
</div>
