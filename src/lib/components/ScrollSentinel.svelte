<script lang="ts">
	import { onMount } from 'svelte';

	let { onIntersect }: { onIntersect: () => void } = $props();
	let sentinel: HTMLDivElement;

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				if (entries[0].isIntersecting) {
					onIntersect();
				}
			},
			{ rootMargin: '200px' }
		);

		observer.observe(sentinel);
		return () => observer.disconnect();
	});
</script>

<div bind:this={sentinel} aria-hidden="true"></div>
