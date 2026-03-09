<script lang="ts">
	export let theaters: any[] = [];
</script>

<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
	{#each theaters as t}
		<div class="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
			<!-- Theater Name -->
			<h2 class="text-lg font-semibold">{t.name}</h2>
			<p class="mb-3 text-sm text-gray-500">{t.location}</p>

			<!-- Info -->
			<div class="mt-3 grid grid-cols-3 gap-3 text-center">
				<div class="rounded-lg bg-gray-100 p-3">
					<p class="text-xs text-gray-500">Rows</p>
					<p class="font-semibold">{t.rows}</p>
				</div>

				<div class="rounded-lg bg-gray-100 p-3">
					<p class="text-xs text-gray-500">Cols</p>
					<p class="font-semibold">{t.cols}</p>
				</div>

				<div class="rounded-lg bg-gray-100 p-3">
					<p class="text-xs text-gray-500">Seats</p>
					<p class="font-semibold">{t.totalSeats}</p>
				</div>
			</div>
		</div>
	{/each}

	{#if theaters.length === 0}
		<p class="col-span-full text-center text-gray-400">No theaters found</p>
	{/if}
</div>
