<script>
	import Wrapper from '$components/streak/wrapper.svelte';
	import RewardCard from '$components/rewards/rewardcard.svelte';

	export let data;
	let streaks = data.streaks;

	console;
</script>

<Wrapper>
	<div class="flex flex-wrap gap-2 p-2 w-full">
		{#each streaks as streak (streak.id)}
			<RewardCard details={streak} />
		{/each}
	</div>
</Wrapper>
