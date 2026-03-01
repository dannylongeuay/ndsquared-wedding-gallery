<script lang="ts">
	import ClipItem from './ClipItem.svelte';
	import ScrollSentinel from './ScrollSentinel.svelte';

	const BATCH = 3;
	let { urls }: { urls: string[] } = $props();
	let displayCount = $state(BATCH);

	function loadMore() {
		displayCount += BATCH;
	}
</script>

<div class="gallery">
	{#each Array(displayCount) as _, i (i)}
		<ClipItem src={urls[i % urls.length]} />
	{/each}
	<ScrollSentinel onIntersect={loadMore} />
</div>

<style>
	.gallery {
		max-width: 56rem;
		margin: 0 auto;
	}
</style>
