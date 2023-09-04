import relativeImages from 'mdsvex-relative-images';
import emoji from 'remark-emoji';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
import headings from '@sveltinio/remark-headings';

const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [headings, emoji, relativeImages],
	rehypePlugins: [
		rehypeSlug,
		[rehypeAutoLinkHeadings, { behavior: 'wrap' }],
		[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]
	]
};

export default mdsvexConfig;
