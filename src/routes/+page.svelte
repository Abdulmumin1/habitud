<script>
	import Hero from '$components/landing/hero.svelte';
	import Nav from '$components/landing/nav.svelte';
	import Track from '$components/landing/track.svelte';
	import Footer from '../components/landing/footer.svelte';
	import Reminder from '../components/landing/reminder.svelte';

	let deferredPrompt;
	let showInstallButton = false;

	// Listen for the beforeinstallprompt event
	if (typeof window !== 'undefined') {
		window.addEventListener('beforeinstallprompt', (e) => {
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault();
			// Stash the event so it can be triggered later
			deferredPrompt = e;
			// Update UI to notify the user they can install the PWA
			showInstallButton = true;
		});

		// Listen for successful installation
		window.addEventListener('appinstalled', () => {
			// Hide the install button
			showInstallButton = false;
			// Clear the deferredPrompt
			deferredPrompt = null;
		});
	}

	function installPWA() {
		if (deferredPrompt) {
			// Show the install prompt
			deferredPrompt.prompt();
			// Wait for the user to respond to the prompt
			deferredPrompt.userChoice.then((choiceResult) => {
				if (choiceResult.outcome === 'accepted') {
					console.log('User accepted the install prompt');
				} else {
					console.log('User dismissed the install prompt');
				}
				// Clear the deferredPrompt
				deferredPrompt = null;
			});
		}
	}
</script>

<main>
	<header>
		<nav>
			<Nav />
		</nav>
		<Hero />
	</header>

	<section>
		<Track />
	</section>
	<section>
		<Reminder />
	</section>
	{#if showInstallButton}
		<section class="flex items-center justify-center min-h-screen">
			<button
				onclick={installPWA}
				class="bg-gradient-to-br from-emerald-100 to-yellow-100 text-stone-800 font-semibold py-4 px-8 rounded-lg text-xl shadow-lg hover:shadow-xl transition-all duration-300"
			>
				Install Habitud
			</button>
		</section>
	{/if}
	<footer>
		<Footer />
	</footer>
</main>
