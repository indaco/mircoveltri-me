<script lang="ts">
	import '../app.css';
	import { website, webmaster } from '$config/website.js';
	import GoogleFonts from '$partials/GoogleFonts.svelte';
	import SEO from '$partials/SEO.svelte';
	import Cite from '$theme/basic/components/Cite.svelte';
	import Footer from '$theme/basic/partials/Footer.svelte';
</script>

<svelte:head>
	<GoogleFonts />
</svelte:head>

<SEO />
<div class="relative content">
	<slot />

	<Footer />
</div>
