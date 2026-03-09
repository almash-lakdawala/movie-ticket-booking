<script lang="ts">
	import { deleteMovie } from '$lib/firebase/db';
	import { reload } from 'firebase/auth';

	export let movies: any[] = [];

	const handleDelete = async (id: string) => {
		const confirmDelete = confirm('are you sure?');
		if (!confirmDelete) return;

		const success = await deleteMovie(id);
		if (success) reload;
	};
</script>

<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each movies as movie}
		<div class="rounded-xl border bg-[#bdf0c1] p-4 shadow-sm transition hover:shadow-md">
			<img src={movie.poster} alt={movie.title} class="h-120 w-full rounded-lg object-cover" />

			<div class="mt-4 space-y-2">
				<h2 class="text-lg font-semibold">{movie.title}</h2>

				<div class="space-y-1 text-sm text-gray-600">
					<p><span class="font-medium">Duration:</span> {movie.duration}</p>
					<p><span class="font-medium">Language:</span> {movie.language}</p>
				</div>

				<span class="inline-block rounded bg-green-100 px-3 py-1 text-sm text-green-600">
					{movie.status}
				</span>
			</div>

			<div class="mt-4">
				<button
					on:click={() => handleDelete(movie.id)}
					class="w-full rounded-lg bg-red-500 py-2 text-sm text-white transition hover:bg-red-600"
				>
					Delete
				</button>
			</div>
		</div>
	{/each}

	{#if movies.length === 0}
		<p class="col-span-full text-center text-gray-400">No movies found</p>
	{/if}
</div>
