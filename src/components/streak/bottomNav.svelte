<script>
	import Icon from '@iconify/svelte';

	import { page } from '$app/stores';
	import BottomNavWrapper from './bottomNavWrapper.svelte';
</script>

<BottomNavWrapper>
	<div class="w-full">
		<ul
			class=" bg-orange-100 rounded-lg flex gap-6 text-lg p-4 items-center justify-between md:items-start overflow-hidden"
		>
			<li>
				<a href="/streaks" class="flex flex-col items-center justify-center">
					<span>
						<Icon icon="icon-park-outline:dashboard" />
					</span>
					<span class="text-sm" class:text-orange-500={$page.url.pathname == '/streaks'}
						>Dashboard</span
					></a
				>
			</li>
			<li>
				<a href="/achievements" class="flex flex-col items-center justify-center">
					<span>
						<Icon icon="solar:cup-star-bold" />
					</span><span class="text-sm" class:text-orange-500={$page.url.pathname == '/achievements'}
						>Archievenments</span
					></a
				>
			</li>
			<li>
				<a href="/rewards" class="flex flex-col items-center justify-center">
					<span>
						<Icon
							icon="streamline:interface-favorite-award-ribbon-reward-like-social-rating-media"
						/>
					</span>
					<span class="text-sm" class:text-orange-500={$page.url.pathname == '/rewards'}
						>Rewards</span
					></a
				>
			</li>
		</ul>
	</div>
</BottomNavWrapper>
