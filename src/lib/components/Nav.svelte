<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<nav>
	<a href="/" class="logo">N &amp; D</a>
	<div class="links">
		<a href="/photos">Photos</a>
		<a href="/photobooth">Photobooth</a>
		<a href="/clips">Clips</a>
	</div>
	<ThemeToggle />
</nav>

<style>
	nav {
		position: sticky;
		top: 0;
		z-index: 100;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.75rem 1.5rem;
		background-color: var(--mantle);
		border-bottom: 1px solid var(--surface0);
	}

	.logo {
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--mauve);
		text-decoration: none;
	}

	.links {
		display: flex;
		gap: 1rem;
		margin-left: auto;
	}

	.links a {
		color: var(--subtext1);
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.links a:hover {
		color: var(--mauve);
		text-decoration: none;
	}

	@media (max-width: 640px) {
		nav {
			flex-wrap: wrap;
			justify-content: center;
		}

		.links {
			margin-left: 0;
			order: 3;
			width: 100%;
			justify-content: center;
		}
	}
</style>
