<script>
	import Hero from '$components/landing/hero.svelte';
	import Nav from '$components/landing/nav.svelte';
	import Track from '$components/landing/track.svelte';
	import Reminder from '../components/landing/reminder.svelte';
	import Share from '../components/landing/share.svelte';
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
	<section>
		<Share />
	</section>
</main>
