<script lang="ts">
	import { website, socials } from '$config/website.js';
	import { MetaTags, MetaTagsProps } from 'svelte-meta-tags';
	import { variables } from '$lib/Env.js';

	const metatags: MetaTagsProps = {
		title: `${website.title}`,
		description: `${website.description}`,
		canonical: `${variables.basePath}`,
		robotsProps: {
			nosnippet: true,
			notranslate: true,
			noimageindex: true,
			noarchive: true,
			maxSnippet: -1,
			maxImagePreview: 'large',
			maxVideoPreview: -1
		},
		openGraph: {
			type: 'website',
			url: `${variables.basePath}`,
			site_name: `${website.name}`,
			title: `${website.title}`,
			description: `${website.description}`,
			images: [
				{
					url: `${variables.basePath}/images/logo.jpg`,
					width: 800,
					height: 600,
					alt: 'Logo'
				}
			]
		},
		twitter: {
			handle: `@${socials.twitter}`,
			site: `@${socials.twitter}`,
			cardType: 'summary_large_image'
		}
	};
</script>

<MetaTags {...metatags} />
