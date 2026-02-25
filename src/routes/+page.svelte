<script lang="ts">
	import { goto } from '$app/navigation';
	import { currentUser } from '$lib/stores/user';

	function logout() {
		currentUser.set(null);
		goto('/login');
	}
</script>

<section>
	<div class="relative font-serif">
		<!-- Background -->
		<img src="/images/bg.svg" class="h-screen w-full object-cover" alt="" />

		<!-- Navbar -->
		<div class="absolute top-0 left-0 w-full px-10 py-6">
			<div class="flex items-center justify-between">
				<!-- Logo -->
				<img src="/images/logo.svg" class="h-12" alt="Logo" />

				<!-- Right buttons -->
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

		<h1
			class="absolute top-40 left-1/2 -translate-x-1/2 text-6xl font-light tracking-wide text-white"
		>
			Now Showing
		</h1>
	</div>
</section>
