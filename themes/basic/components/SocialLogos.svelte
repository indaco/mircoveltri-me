<script lang="ts">
	import { TwitterIcon } from '@indaco/svelte-iconoir/twitter';
	import { LinkedInIcon } from '@indaco/svelte-iconoir/linkedin';
	import { GitHubIcon } from '@indaco/svelte-iconoir/github';

	interface Props {
		data: Record<string, string>;
	}

	let { data }: Props = $props();

	function getIconComponent(name: string) {
		switch (name) {
			case 'twitter':
				return TwitterIcon;
			case 'linkedin':
				return LinkedInIcon;
			case 'github':
				return GitHubIcon;
			default:
				break;
		}
	}
</script>

<div class="flex flex-row justify-center mx-auto space-x-3 text-gray-700">
	{#each Object.entries(data) as [name, url] (name)}
		{#if url != ''}
			{@const SvelteComponent = getIconComponent(name)}
			<a
				id={name}
				href={url}
				class="flex items-center p-2 uppercase transition duration-500 ease-in-out border border-gray-300 rounded-full hover:bg-gray-600 hover:text-white"
			>
				<SvelteComponent alt={name} size="xl" />
			</a>
		{/if}
	{/each}
</div>
