<script lang="ts">
	import { page } from '$app/state';
	import { website } from 'config/website.js';
	import { PageMetaTags } from '@indaco/sveo/metadata';
	import {
		JsonLdWebSite,
		JsonLdBreadcrumbs,
		JsonLdWebPage,
		JsonLdSiteNavigationElements
	} from '@indaco/sveo/schemaorg';
	import { menu } from 'config/menu.js';
</script>

<JsonLdWebSite data={website} />
<JsonLdSiteNavigationElements baseURL={website.baseURL} data={menu} />
{#key page.url.href}
	<JsonLdBreadcrumbs url={page.url.href} />
{/key}
{#if page.data && page.data.seoData}
	<PageMetaTags data={page.data.seoData} />
	<JsonLdWebPage data={page.data.seoData} />
{/if}
