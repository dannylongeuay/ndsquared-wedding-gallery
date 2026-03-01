<script lang="ts">
	let { src, alt = '' }: { src: string; alt?: string } = $props();
</script>

<figure>
	<img {src} {alt} loading="lazy" decoding="async" />
</figure>

<style>
	figure {
		margin: 0 0 1.5rem;
	}

	img {
		width: 100%;
		border-radius: 0.5rem;
		background-color: var(--surface0);
	}
</style>
