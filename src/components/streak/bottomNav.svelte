<script>
	import Icon from '@iconify/svelte';

	import { page } from '$app/state';
	import BottomNavWrapper from './bottomNavWrapper.svelte';
</script>

<BottomNavWrapper>
	<div class="w-full p-3">
		<ul
			class=" bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-full  flex gap-6 text-lg p-4 items-center justify-between md:items-start overflow-hidden"
		>
		<li class="bg-white rounded-full p-1">
				<a href="/streaks" class="flex flex-col items-center justify-center">
					<span class="text-2xl" class:text-stone-500={page.url.pathname == '/streaks'}>
						<Icon icon="lets-icons:home-duotone" />
					</span>
					<!-- <span class="text-sm" class:text-stone-500={page.url.pathname == '/streaks'}
						>Dashboard</span
					> -->
				</a>
			</li>
			<li class="bg-white rounded-full p-1">
				<a href="/achievements" class="flex flex-col items-center justify-center">
					<span class:text-stone-500={page.url.pathname == '/achievements'}>
						<Icon class="text-xl" icon="icon-park-twotone:trophy" />
						<!-- </span><span class="text-sm" class:text-stone-500={page.url.pathname == '/achievements'}
						>Archievenments</span
					> -->
					</span></a
				>
			</li>
			<li class="bg-white rounded-full p-1">
				<a href="/completed" class="flex flex-col items-center justify-center">
					<span class:text-stone-500={page.url.pathname == '/completed'}>
						<Icon class='text-3xl' icon="lets-icons:done-duotone-line" />
					</span>
					<!-- <span class="text-sm" class:text-stone-500={page.url.pathname == '/completed'}
						>Completed</span
					> -->
				</a>
			</li>

			
			<li class="bg-white rounded-full p-1">
				<a href="/rewards" class="flex flex-col items-center justify-center">
					<span class:text-stone-500={page.url.pathname == '/rewards'}>
						<Icon
						class='text-2xl'
							icon="fluent:reward-20-filled"
						/>
					</span>
					<!-- <span class="text-sm" class:text-stone-500={page.url.pathname == '/rewards'}
						>Rewards</span
					> -->
				</a>
			</li>

			
		</ul>
	</div>
</BottomNavWrapper>
