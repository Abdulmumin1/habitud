<script>
	import feather from 'feather-icons';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	import { page } from '$app/stores';
</script>

<div class="w-[50px] fixed h-full bg-orange-200 md:w-[250px]">
	<ul
		class="flex flex-col gap-6 text-lg p-0 items-center justify-center md:items-start md:p-6 overflow-hidden"
	>
		<li>
			<h2 class="text-2xl py-8 flex items-center gap-2">
				<Icon icon="material-symbols:track-changes" />
				<span class="hidden md:inline">Habitud</span>
			</h2>
		</li>
		<li>
			<a
				href="/streaks"
				class="flex items-center gap-2"
				class:text-orange-500={$page.url.pathname == '/streaks'}
			>
				<span>
					<Icon icon="icon-park-outline:dashboard" />
				</span>
				<span class="hidden md:inline">Dashboard</span></a
			>
		</li>
		<li>
			<a
				href="/achievements"
				class="flex items-center gap-2"
				class:text-orange-500={$page.url.pathname == '/achievements'}
			>
				<span>
					<Icon icon="solar:cup-star-bold" />
				</span><span class="hidden md:inline">Archievenments</span></a
			>
		</li>
		<li>
			<a
				href=""
				class="flex items-center gap-2"
				class:text-orange-500={$page.url.pathname == '/reward'}
			>
				<span>
					<Icon icon="streamline:interface-favorite-award-ribbon-reward-like-social-rating-media" />
				</span>
				<span class="hidden md:inline">Rewards</span></a
			>
		</li>
	</ul>
</div>
