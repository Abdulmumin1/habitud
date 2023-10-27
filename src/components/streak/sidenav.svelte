<script>
	import feather from 'feather-icons';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';
</script>

<div class="w-[50px] fixed h-full bg-orange-200 md:w-[250px]">
	<ul
		class="flex flex-col gap-6 text-lg p-0 items-center justify-center md:items-start md:p-6 overflow-hidden"
	>
		<li>
			<h2 class="text-2xl py-8 flex items-center gap-2">
				<i data-feather="circle" id="my-circle" class="" stroke-width="2" />
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
					<i data-feather="home" id="my-circle" class="foo bar" stroke-width="2" />
				</span>
				<span class="hidden md:inline">Dashboard</span></a
			>
		</li>
		<li>
			<a
				href="/achievements"
				class="flex items-center"
				class:text-orange-500={$page.url.pathname == '/achievements'}
			>
				<span>
					<i data-feather="award" id="my-circle" class="foo bar" stroke-width="2" />
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
					<i data-feather="star" id="my-circle" class="foo bar" stroke-width="2" />
				</span>
				<span class="hidden md:inline">Rewards</span></a
			>
		</li>
	</ul>
</div>
