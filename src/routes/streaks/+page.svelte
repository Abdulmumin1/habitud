<script>
	import { onMount } from 'svelte';

	import Streakcard from '$components/streak/streakcard.svelte';
	import Wrapper from '$components/streak/wrapper.svelte';
	import Tasktoday from '../../components/streak/tasktoday.svelte';
	import Icon from '@iconify/svelte';

	import { projects } from '$lib/stores/task.js';

	projects.set([]);
	export let data;

	let streaks = [...data.streaks];
</script>

<Wrapper>
	<div class="flex flex-col w-full h-full gap-12">
		<div class="h-[45%] p-4 md:p-4 mt-12 flex justify-center flex-col gap-4 rounded-b-xl mx-2">
			<p class=" text-5xl">Today</p>

			<div class="flex gap-2 flex-col transition-all duration-300">
				{#each $projects as project (project.id)}
					<Tasktoday details={project} done={project.completed} />
				{/each}
			</div>
			<a
				href="streaks/new"
				class="bg-orange-300 flex items-center justify-center gap-2 p-2 rounded-lg w-fit px-6 active:scale-95 transition-transform duration-300"
				>Track new habit
				<Icon icon="material-symbols:add-task-rounded" />
			</a>
		</div>
		<div class="w-full flex items-center justify-center">
			<div class="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-4">
				{#each streaks as streak (streak.id)}
					<Streakcard details={streak} />
				{/each}
				<!-- <Streakcard details={{ titie: 'Write a Journal', duration: 20, color: 'orange' }} />
				<Streakcard
					details={{ titie: 'Post About Snippetland on Twitter', duration: 14, color: 'blue' }}
				/>
				<Streakcard details={{ titie: 'Workout', duration: 34, color: 'red' }} />
				<Streakcard details={{ titie: 'Jump a hundred times', duration: 12, color: 'emerald' }} /> -->
			</div>
		</div>
	</div>
</Wrapper>
