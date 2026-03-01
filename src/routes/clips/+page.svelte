<script lang="ts">
	import ClipGallery from '$lib/components/ClipGallery.svelte';
	import { clipUrls } from '$lib/config/media';
</script>

<h1>Clips</h1>
<ClipGallery urls={clipUrls} />

<style>
	h1 {
		text-align: center;
		margin-bottom: 2rem;
		color: var(--text);
	}
</style>
