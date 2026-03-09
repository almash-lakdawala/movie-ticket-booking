<script lang="ts">
	import { goto } from '$app/navigation';

	import { currentUser } from '$lib/stores/user';
	import { onMount } from 'svelte';
	import { displayMovie } from '$lib/firebase/db';

	function logout() {
		currentUser.set(null);
		goto('/login');
	}

	let movies: any[] = [];

	onMount(async () => {
		movies = await displayMovie();
	});
</script>

<div class="absolute top-0 left-0 w-full px-10 py-6">
	<div class="flex items-center justify-between">
		<!-- Logo -->
		<img src="/images/logo.svg" class="h-12" alt="Logo" />

		<div class="flex items-center gap-6">
			<button class="text-lg font-medium text-white transition hover:text-green-400">
				My Ticket
			</button>

			<button
				on:click={logout}
				class="text-md rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
			>
				Logout
			</button>
		</div>
	</div>
</div>
