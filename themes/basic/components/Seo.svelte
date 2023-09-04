<script lang="ts">
	import { page } from '$app/stores';
	import { website } from '$config/website.js';
	import { PageMetaTags } from '@sveltinio/seo/metadata';
	import {
		JsonLdWebSite,
		JsonLdBreadcrumbs,
		JsonLdWebPage,
		JsonLdSiteNavigationElements
	} from '@sveltinio/seo/schemaorg';
	import { menu } from '$config/menu.js';
	import { sortBy } from '@sveltinio/ts-utils/collections';

	const sortedMenu = sortBy(menu, 'weight');
</script>

<JsonLdWebSite data={website} />
<JsonLdSiteNavigationElements baseURL={website.baseURL} data={sortedMenu._unsafeUnwrap()} />
{#key $page.url.href}
	<JsonLdBreadcrumbs url={$page.url.href} />
{/key}
{#if $page.data && $page.data.seoData}
	<PageMetaTags data={$page.data.seoData} />
	<JsonLdWebPage data={$page.data.seoData} />
{/if}
