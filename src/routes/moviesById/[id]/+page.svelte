<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { getMovieById } from '$lib/firebase/db';

	let movie: any = null;

	onMount(async () => {
		const id: any = $page.params.id;
		movie = await getMovieById(id);
	});
</script>

{#if movie}
	<section class="min-h-screen bg-gradient-to-r from-black via-green-900 to-black p-10">
		<div class="mx-auto flex max-w-5xl items-center gap-10">
			<img src={movie.poster} class="w-[300px] rounded-xl shadow-lg" />

			<div class="text-white">
				<h1 class="mb-4 text-4xl font-bold">{movie.title}</h1>

				<p class="mb-2">Duration: {movie.duration}</p>
				<p class="mb-6">Language: {movie.language}</p>

				<button class="rounded-lg bg-green-600 px-6 py-3 text-lg"> Book Ticket </button>
			</div>
		</div>
	</section>
{/if}
