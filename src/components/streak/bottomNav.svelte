<script>
	import feather from 'feather-icons';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';
</script>

<div class="bottom-0 fixed w-full">
	<ul
		class=" bg-orange-100 m-4 rounded-xl flex gap-6 text-lg p-2 px-3 items-center justify-between md:items-start overflow-hidden"
	>
		<li>
			<a href="/streaks" class="flex flex-col items-center gap-2 justify-center">
				<span>
					<i data-feather="home" id="my-circle" class="foo bar" stroke-width="2" />
				</span>
				<span class="text-sm" class:text-orange-500={$page.url.pathname == '/streaks'}
					>Dashboard</span
				></a
			>
		</li>
		<li>
			<a href="/achievements" class="flex flex-col items-center justify-center">
				<span>
					<i data-feather="award" id="my-circle" class="foo bar" stroke-width="2" />
				</span><span class="text-sm" class:text-orange-500={$page.url.pathname == '/achievements'}
					>Archievenments</span
				></a
			>
		</li>
		<li>
			<a href="" class="flex flex-col items-center gap-2 justify-center">
				<span>
					<i data-feather="star" id="my-circle" class="foo bar" stroke-width="2" />
				</span>
				<span class="text-sm" class:text-orange-500={$page.url.pathname == '/rewards'}>Rewards</span
				></a
			>
		</li>
	</ul>
</div>
