<script lang="ts">
	import MediaItem from './MediaItem.svelte';
	import ScrollSentinel from './ScrollSentinel.svelte';

	const BATCH = 5;
	let { urls }: { urls: string[] } = $props();
	let displayCount = $state(BATCH);

	function loadMore() {
		displayCount += BATCH;
	}
</script>

<div class="gallery">
	{#each Array(displayCount) as _, i (i)}
		<MediaItem src={urls[i % urls.length]} alt="Photo {i + 1}" />
	{/each}
	<ScrollSentinel onIntersect={loadMore} />
</div>

<style>
	.gallery {
		max-width: 56rem;
		margin: 0 auto;
	}
</style>
