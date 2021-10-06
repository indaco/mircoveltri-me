import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import relativeImages from 'mdsvex-relative-images';
import preview, { textFormatter, htmlFormatter } from 'remark-preview';

import emoji from 'remark-emoji';
import remarkSlug from 'remark-slug';
import rehypeAutoLinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import headings from './src/lib/utils/headings.js';

export const mdsvexConfig = {
	extensions: ['.svelte.md', '.md', '.svx'],
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [
		remarkSlug,
		headings,
		emoji,
		relativeImages,
		// Add an HTML preview snippet (formatted).
		// It is used on the RSS feed
		preview(
			textFormatter({
				length: 50
			}),
			htmlFormatter({
				length: 200,
				maxBlocks: 1
			}),
			{
				attribute: 'previewHtml'
			}
		)
	],
	rehypePlugins: [
		rehypeSlug[
			(rehypeAutoLinkHeadings,
			{
				behavior: 'wrap'
			})
		]
	]
};
