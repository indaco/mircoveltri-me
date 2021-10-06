<script lang="ts">
	export let name: string;
	export let url: string;
	export let alt: string = '';
	$: altText = alt != '' ? alt : name;
</script>

<a
	rel="external noopener noreferrer"
	target="_blank"
	href={url}
	aria-label={altText}
	class={$$props.class}
	style={$$props.style}
>
	<slot />
</a>

<style>
	a {
		text-decoration: underline;
	}
</style>
