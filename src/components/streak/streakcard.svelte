<script>
	import { projects } from '$lib/stores/task.js';
	import { afterUpdate, onDestroy, onMount, setContext } from 'svelte';
	import Cardmenu from './cardmenu.svelte';
	import IndependentCard from './independentCard.svelte';
	import FlipCard from '../landing/FlipCard.svelte';

	import { formatDate } from '$lib/index.js';
	import { enhance } from '$app/forms';
	import Icon from '@iconify/svelte';
	import { fly } from 'svelte/transition';

	export let details = { title: 'New Task', duration: 30, color: 'orange' };

	$: details = details;
	let title = details.title;
	let duration = details.duration;
	let color = details.color;
	let refElement;
	let thisData;

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
		// Create Date objects for the provided date string and today
		const providedDate = new Date(details.createdAt);
		const today = new Date();
		// today.setDate(today.getDate() - 1); // Subtract 1 day from today

		// Extract year, month, and day components from both dates
		const providedYear = providedDate.getFullYear();
		const providedMonth = providedDate.getMonth();
		const providedDay = providedDate.getDate();

		const todayYear = today.getFullYear();
		const todayMonth = today.getMonth();
		const todayDay = today.getDate();

		// Calculate the difference in days
		const daysDifference = Math.floor(
			(Date.UTC(todayYear, todayMonth, todayDay) -
				Date.UTC(providedYear, providedMonth, providedDay)) /
				(1000 * 60 * 60 * 24)
		);

		return daysDifference;
	}

	let daysDiff = getDaysDiff();
	function updateCard() {
		const index = $projects.indexOf(thisData);

		let newData = { ...details, completed: true, refElement };

		projects.update((cur) => {
			cur[index] = newData;
			return cur;
		});

		let new_cards_number = details.streakArray;
		console.log(new_cards_number);
		// new_cards_number[daysDiff] = 1;
		card_number = [];
		for (let index = 0; index < new_cards_number.length; index++) {
			if (index == daysDiff) {
				card_number[index] = 1;
			} else {
				card_number[index] = new_cards_number[index];
			}
		}
	}
	// console.log(card_number);

	$: completed =
		daysDiff + 1 > duration ||
		(daysDiff + 1 == duration && card_number[card_number.length - 1] == 1);

	onMount(() => {
		if (!completed) {
			projects.update((cur) => {
				thisData = { ...details, refElement, completed: details.streakArray[daysDiff] };
				let set = new Set();
				cur.forEach((value) => {
					set.add(value);
					// console.log('value', value);
				});
				set.add(thisData);

				return [...set];
			});
		}

		// console.log(refElement);
	});

	let done = daysDiff + 1 > duration;
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
				{#if !done}
					<span class="text-[9px]">{`${daysDiff + 1}/${details.duration}`}</span>
				{:else}
					<span class="text-[9px]">Completed</span>
				{/if}
			</div>
		</div>

		<Cardmenu {details} />
	</div>
	<div class=" h-full">
		<div class="grid grid-cols-7 gap-2">
			{#each card_number as state (crypto.randomUUID())}
				<IndependentCard details={{ state, color: details.color }} />
			{/each}
		</div>
	</div>

	{#if completed}
		<div
			in:fly
			class="w-full bg-{color}-300 flex items-center gap-4 p-4 rounded-md scale-bit transition-all duration-300"
		>
			<Icon icon="material-symbols:done-all-rounded" />

			Congratulations, Completed
		</div>
	{:else if card_number[daysDiff] == 1}
		<div
			in:fly
			class="w-full bg-{color}-300 flex items-center gap-4 p-4 rounded-md scale-bit transition-all duration-300"
		>
			<Icon icon="material-symbols:done-all-rounded" />

			Today Completed
		</div>
	{:else}
		<div class="w-full" in:fly>
			<form method="post" action="?/updateStreak" use:enhance>
				<input name="details" value={JSON.stringify(details)} class="hidden" />

				<button
					class="w-full bg-white flex items-center gap-4 p-4 rounded-md scale-bit transition-all duration-300"
					on:click={updateCard}
					bind:this={refElement}
					type="submit"
				>
					<Icon icon="material-symbols:done-all-rounded" />
					Mark today
					<!-- <input type="submit"  " class={`accent-${color}-300`} /> -->
				</button>
			</form>
		</div>
	{/if}
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
