<script context="module">
	import { website, socials } from '$config/website.js';
	import SocialLogos from '$theme/basic/components/SocialLogos.svelte';
</script>

<svelte:head>
	<title>{website.name}</title>
</svelte:head>

<section class="flex flex-col items-center justify-center w-full px-5 py-12 mx-auto text-gray-600 ">
	<div class="max-w-xl">
		<div class="mx-auto mb-12 prose text-justify md:prose-xl">
			<h1 class="text-left">Hello, I'm Mirco</h1>

			<p>
				I'm an enterprise architect, in love with music, technology and outdoor activities, aspiring
				globe trotter.
			</p>

			<p>
				Always looking for something new to learn and to do! Smart experiences are my green energy.
			</p>

			<p class="italic">My socials are below if you'd like to get in touch. Thanks!</p>
		</div>

		<SocialLogos data={socials} />
	</div>
</section>
