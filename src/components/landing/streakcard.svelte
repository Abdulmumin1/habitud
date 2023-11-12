<script>
	export let color = 'orange';

	export let title;
	export let duration = 30;

	function generateRandomArray(length) {
		const array = [];
		for (let i = 0; i < length; i++) {
			array.push(Math.round(Math.random()));
		}

		return array;
	}

	let card_number = generateRandomArray(duration).sort().reverse();
	let bgColor = `bg-${color}-300`;

	function game(element) {
		if (element.innerText == '1') {
			element.classList.add(bgColor);
		}
	}

	export let classlist;
</script>

<div class={`min-w-[300px] h-fit p-3 rounded-lg flex flex-col gap-2 bg-${color}-100 ${classlist} `}>
	<div class={`flex justify-between items-center bg-${color}-50 rounded-lg  p-2 `}>
		<div>
			<p class="">{title}</p>
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

<style>
	.scale-bit:active {
		--tw-scale-x: 0.98;
		--tw-scale-y: 0.98;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
</style>
