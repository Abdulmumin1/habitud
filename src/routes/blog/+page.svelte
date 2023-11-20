<script>
	import Nav from '$components/landing/nav.svelte';
</script>

<div class="bg-orange-50">
	<Nav />
</div>

<div class="flex flex-col items-center justify-center">
	<h1 class="text-6xl my-12">Track your habits, master your life.</h1>

	<form class="text-center max-w-xl rounded-xl gap-2 flex flex-col bg-orange-100 p-4">
		<p class="font-semibold text-lg">Subscribe to Habitud newletter</p>
		<p>
			Receive exclusive content on habit-building, productivity tips, and mental wellness straight
			to your inbox.
		</p>
		<input type="email" class="p-2 rounded-xl" name="" id="" placeholder="name@example.com" />
		<button
			type="submit"
			class="bg-orange-300 p-2 rounded-xl transition-all duration-300 active:scale-95"
			>Subscribe</button
		>
	</form>
</div>
