<script>
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
</script>

<div bind:this={element} class="fixed bottom-0 w-full bottom-nav" class:visible={showNav}>
	<slot />
</div>

<style>
	.bottom-nav {
		transition: opacity 0.3s;
		opacity: 0;
	}

	.visible {
		opacity: 1;
	}
</style>
