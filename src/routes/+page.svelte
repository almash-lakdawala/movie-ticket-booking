<script lang="ts">
	import { goto } from '$app/navigation';

	import { currentUser } from '$lib/stores/user';
	import { onMount } from 'svelte';
	import { displayMovie } from '$lib/firebase/db';
	import MovieCard from '$lib/components/MovieCard.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let movies: any[] = [];

	onMount(async () => {
		movies = await displayMovie();
	});
</script>

<section>
	<div class="relative font-serif">
		<img src="/images/bg.svg" class="h-screen w-full object-cover" alt="" />

		<Navbar />

		<h1
			class="absolute top-40 left-1/2 -translate-x-1/2 text-6xl font-light tracking-wide text-white"
		>
			Now Showing
		</h1>
		<div class="absolute top-60 left-5 flex flex-wrap justify-center gap-10">
			{#each movies as movie}
				<MovieCard {movie} />
			{/each}
		</div>
	</div>
</section>
