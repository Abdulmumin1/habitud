<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props();
</script>

<!-- <script>
	import { onMount, onDestroy } from 'svelte';

	let showNav = false;

	let hideTimeout;
	let element;

	const showNavigation = () => {
		showNav = true;
		clearTimeout(hideTimeout);
		hideTimeout = setTimeout(() => {
			showNav = false;
		}, 3000); // Hide after 3 seconds of inactivity
	};

	onMount(() => {
		let prevScrollPos = window.pageYOffset;

		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos) {
				showNavigation();
				// console.log('show nav');
			} else {
				showNavigation();
			}

			prevScrollPos = currentScrollPos;
		};

		window.addEventListener('scroll', handleScroll);
		element.addEventListener('mouseover', showNavigation);
		// onDestroy(() => {
		// 	window.removeEventListener('scroll', handleScroll);
		// });
	});
</script> -->

<div class="fixed bottom-0 w-full bottom-nav">
	{@render children?.()}
</div>

<style>
	.bottom-nav {
		transition: opacity 0.3s;
	}
</style>
