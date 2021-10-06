<script>
	import { website, webmaster } from '$config/website.js';
	import menu from '$config/menu.js';
	import { variables } from '$lib/Env.js';
	import { JsonLd } from 'svelte-meta-tags';
	import { forEach, orderBy } from 'lodash';

	const menuItem = orderBy(menu, 'weight');

	let elementList = [];
	forEach(menuItem, function (item) {
		elementList.push({
			'@type': 'SiteNavigationElement',
			position: item.weight,
			name: item.identifier,
			description: item.identifier,
			url: `${variables.basePath}` + item.url
		});
	});
</script>

<JsonLd
	schema={{
		'@type': 'ItemList',
		itemListElement: elementList
	}}
/>
