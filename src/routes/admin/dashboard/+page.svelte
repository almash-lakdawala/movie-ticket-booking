<script>
	import { currentUser } from '$lib/stores/user';
	import { get } from 'svelte/store';
	import { onMount } from 'svelte';

	onMount(() => {
		const user = get(currentUser);

		if (!user || user.role !== 'admin') {
			window.location.href = '/login';
		}
	});
</script>

<section>
	<h1>hello this is admin dashboard</h1>
</section>
