<script lang="ts">
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	const menuItems = [
		{ name: 'Movies', path: '/admin/movies' },
		{ name: 'Theaters', path: '/admin/theaters' },
		{ name: 'Users', path: '/admin/users' },
		{ name: 'Orders', path: '/admin/orders' },
		{ name: 'Report', path: '/admin/report' }
	];

	const navigate = (path: string) => {
		goto(path);
	};
</script>

<aside class=" h-screen w-64 bg-[#BDF0C1] shadow-sm">
	<div class="border-b p-6 text-2xl font-semibold text-[#101012]">Admin Panel</div>

	<nav class="space-y-2 p-4">
		{#each menuItems as item}
			<button
				on:click={() => navigate(item.path)}
				class="w-full rounded-lg px-4 py-2 text-left text-xl transition-all
				{$page.url.pathname === item.path ? 'bg-[#1DE782] font-semibold ' : ' hover:bg-[#1DE782]'}"
			>
				{item.name}
			</button>
		{/each}
	</nav>
</aside>
