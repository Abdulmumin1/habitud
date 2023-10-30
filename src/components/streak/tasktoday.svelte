<script>
	import { fade } from 'svelte/transition';

	export let details;
	let title = details.title;
	let color = details.color;
	let ref = details?.refElement;
	// console.log(ref);

	export let done = false;
</script>

<div>
	<input name="details" value={JSON.stringify(details)} class="hidden" />

	<button
		transition:fade
		class={`w-full flex text-left justify-between p-4 rounded-lg bg-${color}-100 scale-bit transition-all duration-300 `}
		class:line-through={done}
		on:click={() => {
			done = true;
			ref.click();
		}}
	>
		{title}
		<!-- <input type="checkbox" class={`accent-${color}-300`} bind:checked={done} disabled={done} /> -->
	</button>
</div>

<style>
	.scale-bit:active {
		--tw-scale-x: 0.994;
		--tw-scale-y: 0.994;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
</style>
