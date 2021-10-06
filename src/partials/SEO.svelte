<script>
	import SiteMetaTags from '$components/seo/metatag/_SiteMetaTags.svelte';
	import { onMount } from 'svelte';

	let menu = null;
	let SiteBreadcrumbs;
	let SiteNavigationElement;

	onMount(async () => {
		try {
			menu = (await import('$config/menu.js')).default;
			if (menu) {
				SiteBreadcrumbs = (await import('$components/seo/jsonld/_SiteBreadcrumbs.svelte')).default;
				SiteNavigationElement = (
					await import('$components/seo/jsonld/_SiteNavigationElement.svelte')
				).default;
			}
		} catch (e) {}
	});
</script>

<SiteMetaTags />

{#if SiteNavigationElement}
	<svelte:component this={SiteNavigationElement} />
{/if}

{#if SiteBreadcrumbs}
	<svelte:component this={SiteBreadcrumbs} />
{/if}
