<section class="hero">
	<h1>Nicole <span class="amp">&amp;</span> Daniel</h1>
	<p class="subtitle">Our Wedding Gallery</p>
</section>

<div class="cards">
	<a href="/photos" class="card">
		<h2>Photos</h2>
		<p>Browse the wedding photos</p>
	</a>
	<a href="/photobooth" class="card">
		<h2>Photobooth</h2>
		<p>Fun moments from the photobooth</p>
	</a>
	<a href="/clips" class="card">
		<h2>Clips</h2>
		<p>Watch short video clips</p>
	</a>
</div>

<style>
	.hero {
		text-align: center;
		padding: 4rem 1rem 3rem;
	}

	h1 {
		font-size: 3rem;
		font-weight: 700;
		color: var(--text);
	}

	.amp {
		color: var(--mauve);
	}

	.subtitle {
		margin-top: 0.5rem;
		font-size: 1.25rem;
		color: var(--subtext1);
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: 1.5rem;
		padding: 1rem 0;
	}

	.card {
		background-color: var(--mantle);
		border: 1px solid var(--surface0);
		border-radius: 0.75rem;
		padding: 2rem;
		text-decoration: none;
		transition: border-color 0.2s, transform 0.2s;
	}

	.card:hover {
		border-color: var(--mauve);
		transform: translateY(-2px);
		text-decoration: none;
	}

	.card h2 {
		font-size: 1.25rem;
		color: var(--mauve);
		margin-bottom: 0.5rem;
	}

	.card p {
		color: var(--subtext1);
		font-size: 0.9rem;
	}
</style>
