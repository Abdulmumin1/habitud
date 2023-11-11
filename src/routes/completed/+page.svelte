<script>
	import Wrapper from '$components/streak/wrapper.svelte';
	import { getDaysDiff } from '$lib/index.js';
	import StreakCompleted from '../../components/completed/streakCompleted.svelte';

	export let data;
	const streaks = [...data.streaks];
</script>

<Wrapper>
	<div class=" p-4 md:p-4 mt-12 flex justify-center flex-col gap-4 rounded-b-xl mx-2">
		<p class=" text-5xl">Completed</p>
	</div>
	<div class="w-full h-fit customGrid gap-4 p-4 md:p-4">
		{#each streaks as streak (streak.id)}
			{#if getDaysDiff(streak.createdAt) > streak.duration || streak.streakArray[streak.streakArray.length - 1] == 1}
				<StreakCompleted
					title={streak.title}
					color={streak.color}
					streakArray={streak.streakArray}
					duration={streak.duration}
				/>
			{/if}
		{/each}
	</div>
</Wrapper>

<style>
	.customGrid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	}
</style>
