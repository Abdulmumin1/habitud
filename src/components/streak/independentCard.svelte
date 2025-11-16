<script>
	import { getContext } from 'svelte';

	function game(element) {
		if (details.state) {
			// element.classList.remove('bg-white');
			element.classList.add(bgColor);
		} else {
			element.classList.add('bg-white');
		}
	}
	function toggleDone(event) {
		event.target.classList.toggle('bg-white');
		event.target.classList.toggle(`bg-${color}-300`);
	}

	let { details } = $props();
	let color = details?.color ? details.color : 'orange';
	let bgColor = `bg-${color}-300`;

	// $: statex = getContext('state');
	// console.log('some thing', details.state);
</script>

<button
	type="submit"
	use:game
	class="w-full  h-full rounded-md transition-all active:scale-90 duration-300"
	style="aspect-ratio: 1/1;"><span class="opacity-0">{details.state}</span></button
>
