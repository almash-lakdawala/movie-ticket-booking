<script lang="ts">
	import { addTheater } from '$lib/firebase/db';
	import { error } from '@sveltejs/kit';

	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let name: string = '';
	let location: string = '';
	let rows: number = 0;
	let cols: number = 0;
	let totalSeats: number;
	$: totalSeats = rows * cols;
	var loading: boolean = false;

	const handleSubmit = async () => {
		if (!name || !location || !rows || !cols || !totalSeats) {
			alert('Fill all the fields');
			return;
		}

		loading = true;

		const theaterData = {
			name,
			location,
			rows,
			cols,
			totalSeats,
			createdAt: new Date()
		};

		const success = await addTheater(theaterData);

		if (success) {
			alert('theater data added');
			dispatch('close');
		} else {
			alert('Error adding theater data');
		}
	};
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
	<div class="w-[420px] rounded-xl bg-white p-6 shadow-lg">
		<h2 class="mb-5 text-xl font-semibold">Add Theater</h2>

		<div class="space-y-4">
			<input bind:value={name} placeholder="Theater name" class="w-full rounded border p-2" />

			<input bind:value={location} placeholder="Location" class="w-full rounded border p-2" />

			<input
				type="number"
				bind:value={rows}
				placeholder="Rows (example: 8)"
				class="w-full rounded border p-2"
			/>

			<input
				type="number"
				bind:value={cols}
				placeholder="Columns (example: 10)"
				class="w-full rounded border p-2"
			/>

			<!-- auto seat calculation -->
			<div class="text-sm text-gray-600">
				Total Seats: <b>{totalSeats || 0}</b>
			</div>
		</div>

		<div class="mt-6 flex justify-end gap-3">
			<button on:click={() => dispatch('close')} class="rounded bg-gray-200 px-4 py-2">
				Cancel
			</button>

			<button on:click={handleSubmit} class="rounded bg-green-600 px-4 py-2 text-white">
				{loading ? 'Adding...' : 'Add Theater'}
			</button>
		</div>
	</div>
</div>
