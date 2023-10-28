<script>
	import { fade } from 'svelte/transition';

	export let title;
	export let color;

	export let done = false;
</script>

<label
	transition:fade
	class={`w-full flex justify-between p-4 rounded-lg bg-${color}-100 scale-bit transition-all duration-300 `}
	class:line-through={done}
>
	{title}
	<input type="checkbox" class={`accent-${color}-300`} bind:checked={done} disabled={done} />
</label>

<style>
	.scale-bit:active {
		--tw-scale-x: 0.994;
		--tw-scale-y: 0.994;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
	}
</style>
