<script lang="ts">
	import AddMovieForm from '$lib/components/admin/AddMovieForm.svelte';
	let showModal = false;
</script>

<div class="p-6">
	<div class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold">Movies</h1>

		<button
			on:click={() => (showModal = true)}
			class="rounded-lg bg-green-600 px-4 py-2 text-white"
		>
			Create New
		</button>
	</div>

	<!-- movie table later here -->
</div>

{#if showModal}
	<AddMovieForm on:close={() => (showModal = false)} />
{/if}
