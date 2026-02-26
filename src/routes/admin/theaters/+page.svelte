<script lang="ts">
	import { goto } from '$app/navigation';
	import AddTheaterForm from '$lib/components/admin/AddTheaterForm.svelte';
	import { currentUser } from '$lib/stores/user';

	let showModal = false;

	function logout() {
		currentUser.set(null);
		goto('/login');
	}
</script>

<div class="p-6">
	<div class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold">Theater</h1>

		<div class=" flex items-center gap-5">
			<button
				on:click={logout}
				class="text-md rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
			>
				Logout
			</button>

			<button on:click={() => (showModal = true)} class="rounded bg-green-600 px-4 py-2 text-white">
				Add Theater
			</button>
		</div>
	</div>

	<!-- theater table comes here -->
</div>

{#if showModal}
	<AddTheaterForm on:close={() => (showModal = false)} />
{/if}
