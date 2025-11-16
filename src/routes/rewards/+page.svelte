<script>
	import Wrapper from '$components/streak/wrapper.svelte';
	import RewardCard from '$components/rewards/rewardcard.svelte';

	let { data } = $props();
	let streaks = data.streaks;

	console;
</script>

<Wrapper>
	<div class="mt-12 flex gap-4 flex-col">
		<p class="p-4 text-5xl">Rewards</p>
		<div class="flex flex-wrap gap-2 p-4 w-full">
			{#each streaks as streak (streak.id)}
				{#if !streak.reward == ''}
					<RewardCard details={streak} />
				{/if}
			{:else}
				<p class="col-span-full text-center text-gray-600">Nothing to show</p>
			{/each}
		</div>
	</div>
</Wrapper>
