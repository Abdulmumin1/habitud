<script>
	import Icon from '@iconify/svelte';
	import RewardProgress from './rewardProgress.svelte';

	let { details } = $props();
	let title = details?.title;
	let description = details?.reward;
	let color = details?.color;
	let streakArray = details?.streakArray;

	function getDaysDiff() {
		// Create Date objects for the provided date string and today
		const providedDate = new Date(details.createdAt);
		const today = new Date();
		// today.setDate(today.getDate() - 1); // Subtract 1 day from today

		// Extract year, month, and day components from both dates
		const providedYear = providedDate.getFullYear();
		const providedMonth = providedDate.getMonth();
		const providedDay = providedDate.getDate();

		const todayYear = today.getFullYear();
		const todayMonth = today.getMonth();
		const todayDay = today.getDate();

		// Calculate the difference in days
		const daysDifference = Math.floor(
			(Date.UTC(todayYear, todayMonth, todayDay) -
				Date.UTC(providedYear, providedMonth, providedDay)) /
				(1000 * 60 * 60 * 24)
		);

		return daysDifference;
	}
	function hasInterruptedSequence(arr) {
		let hasInterrupted = false;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] === 1) {
				if (hasInterrupted) {
					// If a sequence of 1 is interrupted by 0, return true
					return true;
				}
			} else {
				// If a 0 is encountered, set hasInterrupted to true
				hasInterrupted = true;
			}
		}

		// If the entire array is zeros or ends with uninterrupted 1s, return false
		return false;
	}
	let progress = getDaysDiff() + 1;
	let maxProgress = details.duration;
	// console.log(details.title);\
	let interrupted = hasInterruptedSequence(streakArray);
</script>

<div class="w-full gap-1 p-4 bg-{color}-100 rounded-lg flex justify-center flex-col">
	<div class="flex items-center gap-2">
		<span class="mr-2 flex items-center justify-center">
			{#if !interrupted}
				<Icon
					class="text-3xl "
					icon="streamline:interface-favorite-award-ribbon-reward-like-social-rating-media"
				/>
			{:else}
				<div class="text-red-400 text-center">
					<Icon class="text-3xl " icon="material-symbols:heart-broken" />
					Broken
				</div>
			{/if}
		</span>

		<div class="block">
			<h3 class="text-lg leading-none">{description}</h3>
			<p class=" text-gray-600">{title}</p>
		</div>
	</div>
	{#if !interrupted}
		<RewardProgress {progress} {maxProgress} {color} />
	{/if}
</div>
