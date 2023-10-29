<script>
	import Icon from '@iconify/svelte';
	import RewardProgress from './rewardProgress.svelte';

	export let details;
	let title = details?.title;
	let description = details?.reward;
	let color = details?.color;

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

	let progress = getDaysDiff() + 1;
	let maxProgress = details.duration;
	// console.log(details.title);
</script>

<div class="w-full gap-1 p-2 bg-{color}-100 rounded-lg flex justify-center flex-col">
	<div class="flex">
		<span class="mr-2">
			<Icon
				class="text-3xl"
				icon="streamline:interface-favorite-award-ribbon-reward-like-social-rating-media"
			/>
		</span>
		<h3 class="text-lg leading-none font-semibold">{description}</h3>
	</div>
	<p class=" text-gray-600">{title}</p>
	<RewardProgress {progress} {maxProgress} {color} />
</div>
