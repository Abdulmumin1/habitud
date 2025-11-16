<script>
	import Wrapper from '$components/streak/wrapper.svelte';
	import Achievementcard from '../../components/achivements/achievementcard.svelte';

	let { data } = $props();
</script>

<Wrapper>
	<p class="p-4 mt-12 text-5xl">Achievements</p>
	<div class="p-4 flex flex-col items-center justify-center w-full">
		<div class="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			{#each data.achievements as achievement}
				<Achievementcard
					details={{
						title: achievement.title,
						description: achievement.description,
						icon: achievement.icon,
						color: achievement.unlocked ? achievement.color : 'gray',
						unlocked: achievement.unlocked
					}}
				/>
			{/each}
		</div>
	</div>
</Wrapper>
