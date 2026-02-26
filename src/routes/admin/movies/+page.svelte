<script lang="ts">
	import AddMovieForm from '$lib/components/admin/AddMovieForm.svelte';

	import { onMount } from 'svelte';
	import { displayMovie } from '$lib/firebase/db';
	import MovieTable from '$lib/components/admin/MovieTable.svelte';
	import { currentUser } from '$lib/stores/user';
	import { goto } from '$app/navigation';

	let showModal = false;
	let movies: any[] = [];

	const loadMovies = async () => {
		movies = await displayMovie();
	};

	onMount(() => {
		loadMovies();
	});

	function logout() {
		currentUser.set(null);
		goto('/login');
	}

	let selectedMovie: any = null;
</script>

<div class="p-6">
	<div class="mb-6 flex items-center justify-between">
		<h1 class="text-2xl font-bold">Movies</h1>

		<div class=" flex items-center gap-5">
			<button
				on:click={logout}
				class="text-md rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
			>
				Logout
			</button>

			<button
				on:click={() => (showModal = true)}
				class="rounded-lg bg-green-600 px-4 py-2 text-white"
			>
				Create New
			</button>
		</div>
	</div>

	<!-- movie table here -->
	<MovieTable {movies} />
</div>

{#if showModal}
	<AddMovieForm on:close={() => (showModal = false)} />
{/if}
