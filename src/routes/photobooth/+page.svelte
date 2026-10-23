<script lang="ts">
	import Gallery from '#lib/components/Gallery.svelte';
	import { photoboothUrls } from '#lib/config/media.ts';
</script>

<h1>Photobooth</h1>
<Gallery urls={photoboothUrls} />

<style>
	h1 {
		text-align: center;
		margin-bottom: 2rem;
		color: var(--text);
	}
</style>
