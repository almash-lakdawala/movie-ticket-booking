<script lang="ts">
	import { goto } from '$app/navigation';
	import AddTheaterForm from '$lib/components/admin/AddTheaterForm.svelte';
	import TheaterTable from '$lib/components/admin/TheaterTable.svelte';
	import { displayTheater } from '$lib/firebase/db';
	import { currentUser } from '$lib/stores/user';
	import { onMount } from 'svelte';

	let showModal = false;

	let theaters: any[] = [];

	const loadTheaters = async () => {
		theaters = await displayTheater();
	};

	onMount(loadTheaters);
</script>

<div class="mt-30 p-6">
	<div class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold">Theater</h1>

		<div class=" flex items-center gap-5">
			<button on:click={() => (showModal = true)} class="rounded bg-green-600 px-4 py-2 text-white">
				Add Theater
			</button>
		</div>
	</div>

	<!-- theater table comes here -->
	<TheaterTable {theaters} />
</div>

{#if showModal}
	<AddTheaterForm on:close={() => (showModal = false)} />
{/if}
