<script>
	import { getContext } from 'svelte';

	function game(element) {
		if (element.innerText == '1') {
			element.classList.toggle(bgColor);
		} else {
			element.classList.toggle('bg-white');
		}
	}
	function toggleDone(event) {
		event.target.classList.toggle('bg-white');
		event.target.classList.toggle(`bg-${color}-300`);
	}

	export let details;
	let color = details?.color ? details.color : 'orange';
	let bgColor = `bg-${color}-300`;

	// $: statex = getContext('state');
	// console.log(statex);
</script>

<button
	use:game
	type="submit"
	class="w-full max-w-4 h-full rounded-md transition-all active:scale-90 duration-300"
	style="aspect-ratio: 1/1;"><span class="opacity-0">{details.state}</span></button
>
