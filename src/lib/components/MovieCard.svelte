<script lang="ts">
	import { goto } from '$app/navigation';
	export let movie: any;

	const openMovie = () => {
		goto(`/moviesById/${movie.id}`);
	};
</script>

<div class="w-[200px] cursor-pointer" on:click={openMovie}>
	<img
		src={movie.poster}
		class="h-[280px] w-full rounded-xl object-cover transition hover:scale-105"
	/>

	<h3 class="mt-3 text-center font-medium text-white">
		{movie.title}
	</h3>
</div>
