<script>
	import { fade, fly, scale, slide } from 'svelte/transition';
	import Sidenav from './sidenav.svelte';
	import BottomNav from './bottomNav.svelte';
</script>

<div class="flex">
	<div class="hidden md:flex md:w-[340px]">
		<Sidenav />
	</div>
	<div class="flex md:hidden z-50">
		<BottomNav />
	</div>
	<div in:scale={{ axis: 'x' }} class="mb-20 md:mb-6 w-full">
		<slot />
	</div>
</div>
