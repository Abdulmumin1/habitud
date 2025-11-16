<script>
	import { scale } from 'svelte/transition';

	let progress = $state(7);

	const milestones = [7, 14, 21, 30];

	const weeks = {
		7: '1wk',
		14: '2wks',
		21: '3wks',
		30: 'month'
	};
	function updateProgress(milestone) {
		progress = milestone;
	}
</script>

<div in:scale class=" h-full py-4 flex flex-col gap-4 w-full justify-center">
	<div class=" bg-stone-100 rounded-xl">
		<input
			min="7"
			max="30"
			type="number"
			name="duration"
			bind:value={progress}
			class="hidden"
			required
		/>
		<div class="flex flex-col relative w-full h-4 rounded-xl move">
			{#each milestones as milestone (milestone)}
				<button
					type="button"
					class="text-[10px] absolute  from-emerald-100 to-yellow-100 translate-y-1/3 z-10 w-12 h-12 bottom-0 border-2 border-stone-100 rounded-full cursor-pointer transition-colors duration-300"
					style="left: {(milestone / 30) * 100}%;"
					class:bg-gradient-to-br={progress >= milestone}
					class:bg-white={!(progress >= milestone)}
					onclick={() => updateProgress(Number(milestone))}>{weeks[milestone]}</button
				>
			{/each}

			<div
				class="absolute move-a h-4 bg-gradient-to-br from-emerald-100 to-yellow-100 transition-all duration-300 rounded-lg"
				style="width: {(progress / 30) * 100}%;"
			></div>
		</div>
	</div>
	<!-- <div class="w-full h-[20px]">
		<div class="relative w-full move">
			{#each milestones as milestone (milestone)}
				<div
					class="indicator absolute cursor-pointer text-[10px]"
					style="left: {(milestone / 30) * 100}%;"
					on:click={() => updateProgress(milestone)}
				/>
			{/each}
		</div>
	</div> -->
</div>

<style>
	.indicator::before {
		content: '';
		position: absolute;
		bottom: 100%;
		border-width: 10px;
		border-style: solid;
		border-color: transparent transparent rgb(254 215 170) transparent;
	}

	.move:last-child {
		margin-left: -48px;
	}

	.move-a {
		margin-left: 48px;
	}
</style>
