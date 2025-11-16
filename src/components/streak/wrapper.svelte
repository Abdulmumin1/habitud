<script>
	import { fade, fly, scale, slide } from 'svelte/transition';
	import Sidenav from './sidenav.svelte';
	import BottomNav from './bottomNav.svelte';
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<div class="flex">
	<div class="hidden md:flex md:w-[340px]">
		<Sidenav />
	</div>
	<div class="flex md:hidden z-50">
		<BottomNav />
	</div>
	<div in:fly class="mb-20 md:mb-6 w-full">
		{@render children?.()}
	</div>
</div>
