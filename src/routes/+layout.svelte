<script lang="ts">
	import '../app.css';
	import Nav from '#lib/components/Nav.svelte';
	import { initTheme } from '#lib/stores/theme.svelte.ts';
	import { onMount } from 'svelte';
	import favicon from '#lib/assets/favicon.svg';

	let { children } = $props();

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Nav />
<main>
	{@render children()}
</main>

<style>
	main {
		max-width: 72rem;
		margin: 0 auto;
		padding: 2rem 1.5rem;
	}
</style>
