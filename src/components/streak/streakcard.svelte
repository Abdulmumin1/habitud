<script>
	import { projects } from '$lib/stores/task.js';
	import { afterUpdate, onDestroy, onMount, setContext } from 'svelte';
	import Cardmenu from './cardmenu.svelte';
	import IndependentCard from './independentCard.svelte';
	import FlipCard from '../landing/FlipCard.svelte';

	import { formatDate } from '$lib/index.js';
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';

	export let details = { title: 'New Task', duration: 30, color: 'orange' };

	let title = details.title;
	let duration = details.duration;
	let color = details.color;

	// function generateRandomArray(length) {
	// 	const array = [];
	// 	for (let i = 0; i < length; i++) {
	// 		array.push(Math.round(Math.random()));
	// 	}
	// 	return array;
	// }

	$: card_number = details.streakArray;

	onDestroy(() => {
		projects.set([]);
	});

	function getDaysDiff() {
		// Create a Date object for the provided date string
		const providedDate = new Date(details.createdAt);

		// Get today's date
		const today = new Date();

		// Calculate the time difference in milliseconds
		const timeDifference = Math.abs(providedDate - today);

		// Convert the time difference into days
		const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

		return daysDifference;
	}

	function updateCard() {
		const index = $projects.indexOf(thisData);

		let newData = { ...details, completed: true };

		projects.update((cur) => {
			cur[index] = newData;
			return cur;
		});

		card_number = details.streakArray;
		card_number[getDaysDiff()] = 1;
	}

	let thisData = { ...details, completed: details.streakArray[getDaysDiff()] };
	projects.update((cur) => {
		let set = new Set();
		cur.forEach((value) => {
			set.add(value);
			// console.log('value', value);
		});
		set.add(thisData);

		return [...set];
	});
	// forma;
</script>

<!-- <FlipCard> -->
<div
	class={`min-w-[100px]  md:max-w-[300px] h-full p-3 rounded-lg flex flex-col gap-2 bg-${color}-100`}
>
	<div
		class={`flex  justify-between  bg-${color}-50 rounded-lg  p-2 transition-transform duration-300`}
	>
		<div>
			<p class="transition-all duration-300">{title}</p>
			<div class="flex gap-2">
				<span class="text-[9px] text-gray-400">Started {formatDate(details.createdAt)}</span>
				<span class="text-[9px]">{`${getDaysDiff() + 1}/${details.duration}`}</span>
			</div>
		</div>

		<Cardmenu {details} />
	</div>
	<div class=" h-full">
		<div class="grid grid-cols-7 gap-2">
			{#each card_number as state}
				<IndependentCard details={{ state, color: details.color }} />
			{/each}
		</div>
	</div>
	<div class="w-full">
		<form method="post" action="?/updateStreak" use:enhance>
			<input name="details" value={JSON.stringify(details)} class="hidden" />

			<button
				class="w-full bg-white flex items-center gap-4 p-4 rounded-md scale-bit transition-all duration-300"
				on:click={updateCard}
			>
				<Icon icon="material-symbols:done-all-rounded" />
				Mark today
				<!-- <input type="submit"  " class={`accent-${color}-300`} /> -->
			</button>
		</form>
	</div>
</div>

<!-- </FlipCard> -->

<style>
	.scale-bit:active {
		--tw-scale-x: 0.98;
		--tw-scale-y: 0.98;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
</style>
