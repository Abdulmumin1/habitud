<script>
	import Streakcard from './streakcard.svelte';
</script>

<div
	class="group p-4 py-12 md:p-6 flex min-h-screen flex-col md:flex-row items-center justify-center gap-12 md:gap-2"
>
	<div class="flex flex-col">
		<p class="text-4xl max-w-2xl group-[game]:">Track Your Progress and Stay Motivated</p>
		<p>See your progress over time and stay motivated</p>
		<a href="/streaks" class="py-2 bg-orange-200 rounded-lg px-4 w-fit">Get Started</a>
	</div>
	<div class="h-[400px] w-full max-w-[400px] relative">
		<Streakcard
			title={'Run a mile.'}
			duration={12}
			color={'red'}
			classlist="hidden md:flex  top-0 absolute group-hover:top-[-4px] transition-all duration-300"
		/>
		<Streakcard
			title={'Take yoga class'}
			duration={30}
			color={'emerald'}
			classlist="top-24 right-0 md:absolute group-hover:top-[64px] transition-all duration-300"
		/>

		<Streakcard
			title={'Meditate for 10 minutes'}
			duration={30}
			color={'orange'}
			classlist="hidden md:flex top-32 left-[-64px] absolute group-hover:left-[-120px] transition-all duration-300"
		/>
	</div>
</div>
