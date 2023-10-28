<script>
	import Icon from '@iconify/svelte';

	import { page } from '$app/stores';
</script>

<div class="bottom-0 fixed w-full">
	<ul
		class=" bg-orange-100 m-4 rounded-xl flex gap-6 text-lg p-2 px-3 items-center justify-between md:items-start overflow-hidden"
	>
		<li>
			<a href="/streaks" class="flex flex-col items-center justify-center">
				<span>
					<Icon icon="icon-park-outline:dashboard" />
				</span>
				<span class="text-[9px]" class:text-orange-500={$page.url.pathname == '/streaks'}
					>Dashboard</span
				></a
			>
		</li>
		<li>
			<a href="/achievements" class="flex flex-col items-center justify-center">
				<span>
					<Icon icon="solar:cup-star-bold" />
				</span><span
					class="text-[9px]"
					class:text-orange-500={$page.url.pathname == '/achievements'}>Archievenments</span
				></a
			>
		</li>
		<li>
			<a href="/reward" class="flex flex-col items-center justify-center">
				<span>
					<Icon icon="streamline:interface-favorite-award-ribbon-reward-like-social-rating-media" />
				</span>
				<span class="text-[9px]" class:text-orange-500={$page.url.pathname == '/rewards'}
					>Rewards</span
				></a
			>
		</li>
	</ul>
</div>
