<script>
	import { projects } from '$lib/stores/task.js';
	import { afterUpdate, onDestroy, onMount } from 'svelte';
	import Cardmenu from './cardmenu.svelte';
	import IndependentCard from './independentCard.svelte';
	import FlipCard from '../landing/FlipCard.svelte';

	export let details = { titie: 'New Task', duration: 30, color: 'orange' };

	let title = details.titie;
	let duration = details.duration;
	let color = details.color;

	function generateRandomArray(length) {
		const array = [];
		for (let i = 0; i < length; i++) {
			array.push(Math.round(Math.random()));
		}
		return array;
	}

	$: card_number = generateRandomArray(duration).sort().reverse();

	projects.update((cur) => {
		return [...cur, { title, color, card_number, date_created: new Date(), duration }];
	});

	onDestroy(() => {
		projects.set([]);
	});
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
			<div class="flex">
				<span class="text-[9px] text-gray-400">Started 2,Aug .</span>
				<span class="text-[9px]">{`1/${details.duration}`}</span>
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
		<label
			class="w-full bg-white flex justify-between p-4 rounded-md scale-bit transition-all duration-300"
		>
			Mark today
			<input type="checkbox" name="" id="" class={`accent-${color}-300`} />
		</label>
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
