<script lang="ts">
	import '../app.postcss';
	import { googleFonts } from '$config/externals.js';
	import { GoogleFonts } from '@sveltinio/services/google';
	import Seo from '$themes/basic/components/Seo.svelte';
	import Footer from '$themes/basic/partials/Footer.svelte';
</script>

<GoogleFonts fonts={googleFonts} />

<Seo />
<div class="relative content">
	<slot />

	<Footer />
</div>
