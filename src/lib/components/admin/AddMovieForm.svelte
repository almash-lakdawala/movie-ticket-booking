<script lang="ts">
	import { addMovie } from '$lib/firebase/db';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let title: string = '';
	let poster: string = '';
	let duration: string = '';
	let language: string = '';

	var loading: boolean = false;

	const handleSubmit = async () => {
		if (!title || !poster || !duration || !language) {
			alert('Fill all fields');
			return;
		}

		loading: true;

		const movie = {
			title,
			poster,
			duration,
			language,
			status: 'active',
			createdAt: new Date()
		};
		const success = await addMovie(movie);

		if (success) {
			alert('Movie added');
			dispatch('close'); // close modal
		} else {
			alert('Error adding movie');
		}
	};
</script>

<!-- Modal background -->
<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
	<div class="w-[400px] rounded-xl bg-white p-6 shadow-lg">
		<h2 class="mb-4 text-xl font-semibold">Add Movie</h2>

		<div class="space-y-3">
			<input bind:value={title} placeholder="Movie title" class="w-full rounded border p-2" />

			<input bind:value={poster} placeholder="Poster URL" class="w-full rounded border p-2" />

			<input
				bind:value={duration}
				placeholder="Duration (2h 30m)"
				class="w-full rounded border p-2"
			/>

			<input bind:value={language} placeholder="Language" class="w-full rounded border p-2" />
		</div>

		<div class="mt-5 flex justify-end gap-3">
			<button class="rounded bg-gray-200 px-4 py-2" on:click={() => dispatch('close')}>
				Cancel
			</button>

			<button on:click={handleSubmit} class="rounded bg-green-600 px-4 py-2 text-white">
				{loading ? 'Adding...' : 'Add Movie'}
			</button>
		</div>
	</div>
</div>
