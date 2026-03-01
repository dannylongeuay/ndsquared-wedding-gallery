<script lang="ts">
	let { src }: { src: string } = $props();

	let videoEl = $state<HTMLVideoElement>();

	$effect(() => {
		if (!videoEl) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					videoEl!.play();
				} else {
					videoEl!.pause();
				}
			},
			{ threshold: 0.5 }
		);

		observer.observe(videoEl);

		return () => observer.disconnect();
	});
</script>

<figure>
	<!-- svelte-ignore a11y_media_has_caption -->
	<video bind:this={videoEl} {src} autoplay muted loop controls preload="metadata" playsinline></video>
</figure>

<style>
	figure {
		margin: 0 0 1.5rem;
	}

	video {
		width: 100%;
		border-radius: 0.5rem;
		background-color: var(--surface0);
	}
</style>
