<script lang="ts">
	import Gallery from '#lib/components/Gallery.svelte';
	import { photoUrls } from '#lib/config/media.ts';
</script>

<h1>Photos</h1>
<Gallery urls={photoUrls} />

<style>
	h1 {
		text-align: center;
		margin-bottom: 2rem;
		color: var(--text);
	}
</style>
