<script>
	import HankoAuth from '$components/auth/HankoAuth.svelte';
	import StreakCard from '$components/landing/streakcard.svelte';
</script>

<div class="flex w-full h-screen flex-col md:flex-row items-center justify-center">
	<div class="h-full p-12 px-12 bg-orange-300 gap-6 hidden md:flex flex-col w-fit">
		<p class="text-6xl">Habitud</p>
		<div class="relative">
			<StreakCard title={'Run a mile.'} duration={30} color={'orange'} />
			<StreakCard
				title={'Run a mile.'}
				duration={30}
				color={'blue'}
				classlist={'top-8 right-8 absolute'}
			/>
			<!-- <StreakCard
				title={'Run a mile.'}
				duration={30}
				color={'red'}
				classlist={'top-16 left-2 absolute'}
			/>
			<StreakCard
				title={'Run a mile.'}
				duration={30}
				color={'emerald'}
				classlist={'top-32 right-4 absolute'}
			/> -->
		</div>
	</div>
	<div class="w-full flex items-center justify-center flex-col">
		<p class="text-6xl md:hidden text-center mt-12">Habitud</p>

		<HankoAuth />
	</div>
</div>
