<!-- This layout will contain: sidebar top navbar outlet for pages So all admin pages reuse same layout. -->
<script lang="ts">
	import Sidebar from '$lib/components/admin/Sidebar.svelte';
</script>

<div class="flex min-h-screen bg-gray-50">
	<Sidebar />

	<div class="flex-1">
		<slot />
	</div>
</div>
