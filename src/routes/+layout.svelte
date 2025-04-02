<script lang="ts">
	import '../app.css';
	import Seo from 'themes/basic/components/Seo.svelte';
	import Footer from 'themes/basic/partials/Footer.svelte';

	let { children } = $props();
</script>

<Seo />
<div class="relative content">
	{@render children?.()}

	<Footer />
</div>
