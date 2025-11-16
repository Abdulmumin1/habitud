<script>
	import { onMount } from 'svelte';
	import { clickOutside } from '$lib/index.js';
	import feather from 'feather-icons';
	import { scale, slide } from 'svelte/transition';

	let dropdownOpen = $state(false);

	onMount(() => {
		feather.replace();
	});

	function toggleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	function closeDropdown() {
		dropdownOpen = false;
	}

	let { details } = $props();
</script>

<div class="dropdown relative flex flex-col text-center">
	<button
		class="dropdown-button flex items-center justify-end gap-2 hover:scale-105 transition-all duration-300 active:scale-95"
		onclick={toggleDropdown}
	>
		<i data-feather="chevron-down" id="chevron-down" class="" stroke-width="2"></i>
	</button>

	{#if dropdownOpen}
		<ul
			use:clickOutside
			onclick_outside={closeDropdown}
			class={`mt-4 p-2 absolute  right-0 w-fit top-0 text-sm h-fit rounded-lg dropdown-menu flex items-start justify-start flex-col bg-${details.color}-200`}
			transition:scale
		>
			<li>
				<a href="#" class="flex gap-2"><span>Title</span> </a>
			</li>
			<li><a href="#">Details</a></li>
			<li><a href="#">Reward</a></li>
			<li>
				<a href="#"> Achievenment </a>
			</li>
		</ul>
	{/if}
</div>
