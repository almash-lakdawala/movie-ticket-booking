<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { getMovieById, displayTheater } from '$lib/firebase/db';

	let movie: any = null;
	let theaters: any[] = [];

	let selectedTheater: any = null;
	let selectedDate: string | null = null;
	let selectedTime: string | null = null;

	const times = ['15:40', '18:30', '21:00'];

	// Derived value
	$: isProceedEnabled = selectedTheater && selectedDate && selectedTime;

	onMount(async () => {
		const movieId: any = $page.params.id;
		movie = await getMovieById(movieId);
		theaters = await displayTheater();
	});

	//the following function will  Generate dates
	function generateDates() {
		const today = new Date();
		const dates = [];

		for (let i = 0; i < 6; i++) {
			const d = new Date();
			d.setDate(today.getDate() + i);
			dates.push(d);
		}

		return dates;
	}

	const dates = generateDates();

	function proceed() {
		if (!isProceedEnabled) return;

		goto(`/booking/${movie.id}/${selectedTheater.id}?date=${selectedDate}&time=${selectedTime}`);
	}
</script>

{#if movie}
	<section class=" min-h-screen bg-gradient-to-r from-black via-green-900 to-black p-10 text-white">
		<div class=" mx-auto mt-20 flex max-w-6xl gap-16">
			<div class="flex-1 space-y-10">
				<h2 class=" mb-4 font-serif text-2xl font-medium">Theater</h2>
			</div>
			<div>2</div>
		</div>
	</section>
{/if}
