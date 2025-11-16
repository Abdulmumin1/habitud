<script>
	import Icon from '@iconify/svelte';

	/**
	 * @typedef {Object} Props
	 * @property {string} [color]
	 * @property {any} title
	 * @property {any} streakArray
	 */

	/** @type {Props} */
	let { color = 'orange', title, streakArray } = $props();

	let card_number = streakArray;
	let bgColor = `bg-${color}-300`;

	function game(element) {
		if (element.innerText == '1') {
			element.classList.add(bgColor);
		}
	}

	function findLongestSequence(arr) {
		let currentCount = 0;
		let maxCount = 0;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 1) {
				currentCount++;
				if (currentCount > maxCount) {
					maxCount = currentCount;
				}
			} else {
				currentCount = 0;
			}
		}

		return maxCount;
	}
</script>

<div class={`min-w-[300px] h-fit p-3 rounded-lg flex flex-col md:flex-row  gap-2 bg-${color}-100`}>
	<div class="flex gap-2 flex-col w-full">
		<div class={`flex justify-between items-center bg-${color}-50 rounded-lg  p-2 `}>
			<div>
				<p class="text-sm">{title}</p>
				<span class="text-[9px] text-gray-400">Started 2,Aug</span>
			</div>

			<button class="p-2">#</button>
		</div>
		<div class=" h-fit">
			<div class="grid grid-cols-7 gap-2">
				{#each card_number as g}
					<button
						use:game
						class:bg-white={!g}
						class="w-full max-w-4 h-full rounded-md transition-all active:scale-90 duration-300"
						style="aspect-ratio: 1/1;"><span class="opacity-0">{g}</span></button
					>
				{/each}
			</div>
		</div>
	</div>

	<div class="items-center flex flex-col gap-2">
		<div
			class="w-[7rem] h-[7rem] md:w-[10rem] md:h-[10rem] rounded-full relative overflow-hidden flex items-center justify-center"
		>
			<div class="fire text-[6rem] md:text-[10rem] text-{color}-300">
				<Icon icon="ph:fire" class="z-50" />
			</div>

			<!-- <div class="streak-circle">
				<div class="fire" />
			</div> -->
			<div class="font-bold">{findLongestSequence(streakArray)}</div>
		</div>
		Longest Streak
	</div>
</div>

<style>
	.scale-bit:active {
		--tw-scale-x: 0.98;
		--tw-scale-y: 0.98;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}

	.streak-circle {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		border: 3px solid red;
		position: relative;
	}

	.fire {
		position: absolute;
	}
</style>
