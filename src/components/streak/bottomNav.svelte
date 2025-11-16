<script>
	import Icon from '@iconify/svelte';

	import { page } from '$app/state';
	import BottomNavWrapper from './bottomNavWrapper.svelte';
</script>

<BottomNavWrapper>
	<div class="w-full">
		<ul
			class=" bg-stone-100 rounded-lg flex gap-6 text-lg p-4 items-center justify-between md:items-start overflow-hidden"
		>
			<li>
				<a href="/achievements" class="flex flex-col items-center justify-center">
					<span class:text-stone-500={page.url.pathname == '/achievements'}>
						<Icon icon="solar:cup-star-bold" />
						<!-- </span><span class="text-sm" class:text-stone-500={page.url.pathname == '/achievements'}
						>Archievenments</span
					> -->
					</span></a
				>
			</li>
			<li>
				<a href="/completed" class="flex flex-col items-center justify-center">
					<span class:text-stone-500={page.url.pathname == '/completed'}>
						<Icon icon="solar:battery-full-bold" />
					</span>
					<!-- <span class="text-sm" class:text-stone-500={page.url.pathname == '/completed'}
						>Completed</span
					> -->
				</a>
			</li>

			<li>
				<a href="/streaks" class="flex flex-col items-center justify-center">
					<span class="text-2xl" class:text-stone-500={page.url.pathname == '/streaks'}>
						<Icon icon="icon-park-outline:dashboard" />
					</span>
					<!-- <span class="text-sm" class:text-stone-500={page.url.pathname == '/streaks'}
						>Dashboard</span
					> -->
				</a>
			</li>
			<li>
				<a href="/rewards" class="flex flex-col items-center justify-center">
					<span class:text-stone-500={page.url.pathname == '/rewards'}>
						<Icon
							icon="streamline:interface-favorite-award-ribbon-reward-like-social-rating-media"
						/>
					</span>
					<!-- <span class="text-sm" class:text-stone-500={page.url.pathname == '/rewards'}
						>Rewards</span
					> -->
				</a>
			</li>

			<li>
				<a href="/settings" class="flex flex-col items-center justify-center">
					<span class:text-stone-500={page.url.pathname == '/settings'}>
						<Icon icon="material-symbols:settings" />
					</span>
					<!-- <span class="text-sm" class:text-stone-500={page.url.pathname == '/settings'}
						>Settings</span
					> -->
				</a>
			</li>
		</ul>
	</div>
</BottomNavWrapper>
