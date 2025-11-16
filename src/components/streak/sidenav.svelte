<script>
	import feather from 'feather-icons';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';

	import { page } from '$app/state';
</script>

<div class="w-[50px] fixed h-full bg-stone-50 md:w-[250px]">
	<ul
		class="flex flex-col gap-6 text-lg p-0 items-center justify-center md:items-start md:p-6 overflow-hidden"
	>
		<li>
			<h2 class="text-2xl py-8 flex items-center gap-2">
				<Icon icon="material-symbols:track-changes" />
				<span class="hidden md:inline"
					>Habitud
					<!-- <span class="bg-stone-300 rounded-lg p-1 rotate-12 text-[9px] h-fit">beta</span> -->
				</span>
			</h2>
		</li>
		<li>
			<a
				href="/streaks"
				class="flex items-center gap-2"
				class:text-stone-500={page.url.pathname == '/streaks'}
			>
				<span>
					<Icon icon="lets-icons:home-duotone" />
				</span>
				<span class="hidden md:inline">Dashboard</span></a
			>
		</li>
		<li>
			<a
				href="/achievements"
				class="flex items-center gap-2"
				class:text-stone-500={page.url.pathname == '/achievements'}
			>
				<span>
					<Icon icon="icon-park-twotone:trophy" />
				</span><span class="hidden md:inline">Archievenments</span></a
			>
		</li>
		<li>
			<a
				href="rewards"
				class="flex items-center gap-2"
				class:text-stone-500={page.url.pathname == '/rewards'}
			>
				<span>
					<Icon icon="fluent:reward-20-filled" />
				</span>
				<span class="hidden md:inline">Rewards</span></a
			>
		</li>
		<li>
			<a
				href="/completed"
				class="flex items-center gap-2"
				class:text-stone-500={page.url.pathname == '/completed'}
			>
				<span>
					<Icon icon="lets-icons:done-duotone-line" />
				</span>
				<span class="hidden md:inline">Completed</span></a
			>
		</li>
		<li>
			<a
				href="/settings"
				class="flex items-center gap-2"
				class:text-stone-500={page.url.pathname == '/settings'}
			>
				<span>
					<Icon icon="material-symbols:settings" />
				</span>
				<span class="hidden md:inline">Settings</span></a
			>
		</li>
	</ul>
</div>
