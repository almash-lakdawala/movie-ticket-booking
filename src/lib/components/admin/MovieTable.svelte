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

<table class="w-full overflow-hidden rounded-lg border">
	<thead class="bg-gray-100 text-left">
		<tr>
			<th class="p-3">Poster</th>
			<th class="p-3">Title</th>
			<th class="p-3">Duration</th>
			<th class="p-3">Language</th>
			<th class="p-3">Status</th>
			<th class="p-3">Action</th>
		</tr>
	</thead>

	<tbody>
		{#each movies as movie}
			<tr class="border-t hover:bg-gray-50">
				<td class="p-3">
					<img src={movie.poster} class="h-20 w-16 rounded object-cover" />
				</td>
				<td class="p-3">{movie.title}</td>
				<td class="p-3">{movie.duration}</td>
				<td class="p-3">{movie.language}</td>
				<td class="p-3">
					<span class="rounded bg-green-100 px-2 py-1 text-sm text-green-600">
						{movie.status}
					</span>
				</td>
				<td class="p-3">
					<button
						on:click={() => handleDelete(movie.id)}
						class="rounded bg-red-500 px-3 py-1 text-sm text-white"
					>
						Delete
					</button>
				</td>
			</tr>
		{/each}

		{#if movies.length === 0}
			<tr>
				<td colspan="5" class="p-5 text-center text-gray-400"> No movies found </td>
			</tr>
		{/if}
	</tbody>
</table>
