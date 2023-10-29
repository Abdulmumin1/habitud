<script>
	import { onMount } from 'svelte';
	import Wrapper from '$components/streak/wrapper.svelte';
	import DurationVisualizer from '$components/streak/new/durationSlider.svelte';

	let customDuration = false;

	import { scale } from 'svelte/transition';
	import { enhance } from '$app/forms';
	import ColorSelector from '../../../components/streak/new/colorSelector.svelte';
	import Icon from '@iconify/svelte';

	let submitted = false;

	function submitStatus() {
		submitted = true;
	}
</script>

<Wrapper
	><div class="flex flex-col gap-4 px-6 max-w-[530px]">
		<div class="h-[200px] flex items-center">
			<h1 class="text-4xl">Track New</h1>
		</div>

		<form use:enhance action="?/new" method="post" class="flex flex-col gap-4">
			<label class="flex flex-col gap-2">
				Title
				<input
					type="text"
					class="w-full h-full bg-orange-100 p-2 rounded-lg"
					name="title"
					id=""
					placeholder="Meditate for thirty minutes"
					required
				/>
			</label>
			{#if customDuration}
				<label in:scale class="">
					Duration
					<input
						type="number"
						name="duration"
						class="p-2 rounded-lg bg-orange-100"
						id=""
						min="7"
						max="62"
						required
					/>
				</label>
			{:else}
				<DurationVisualizer />
			{/if}
			<div>
				<label>
					Custom Duration
					<input type="checkbox" name="custom" id="" bind:checked={customDuration} />
				</label>
			</div>

			<div>
				<label class="flex gap-2 flex-col">
					Reward I will give myself:
					<input
						type="text"
						name="reward"
						class="bg-orange-100 p-2 rounded-lg"
						placeholder="Example: I will treat myself to a nice meal"
					/>
				</label>
			</div>
			<div>
				<ColorSelector />
			</div>

			<button
				type="submit"
				on:click={submitStatus}
				class="flex items-center justify-center gap-2 p-2 bg-orange-200 rounded-lg"
			>
				{#if submitted}
					<span>
						<Icon icon="svg-spinners:gooey-balls-1" />
					</span>
				{/if}

				<span>Start</span>
			</button>
		</form>
	</div></Wrapper
>

<style>
	.scale-bit:active {
		--tw-scale-x: 0.98;
		--tw-scale-y: 0.98;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
	.card {
		perspective: 1000px;
		width: 200px;
		height: 300px;
	}

	.card-inner {
		width: 100%;
		height: 100%;
		transform-style: preserve-3d;
		transition: transform 0.5s;
	}
	::placeholder {
		color: rgb(251 146 60);
		opacity: 0.7; /* Firefox */
	}
</style>
