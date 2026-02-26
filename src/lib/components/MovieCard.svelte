<script lang="ts">
	export let movie: any;
</script>

<div class="w-[200px] cursor-pointer">
	<img
		src={movie.poster}
		class="h-[280px] w-full rounded-xl object-cover transition hover:scale-105"
	/>

	<h3 class="mt-3 text-center font-medium text-white">
		{movie.title}
	</h3>
</div>
