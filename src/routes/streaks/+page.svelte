<script>
	import { onMount } from 'svelte';
	import { run } from 'svelte/legacy';
	import { enhance } from '$app/forms';
	import { toast } from '@zerodevx/svelte-toast';

	import Streakcard from '$components/streak/streakcard.svelte';
	import Wrapper from '$components/streak/wrapper.svelte';
	import Tasktoday from '../../components/streak/tasktoday.svelte';
	import DurationVisualizer from '$components/streak/new/durationSlider.svelte';
	import ColorSelector from '$components/streak/new/colorSelector.svelte';
	import RewardInput from './new/rewardInput.svelte';
	import Icon from '@iconify/svelte';

	import { projects } from '$lib/stores/task.js';
	import { getDaysDiff,formatDateTitle } from '$lib/index.js';
	import { scale } from 'svelte/transition';

	projects.set([]);
	let { data, form } = $props();

	let streaks = $derived([...(data?.streaks ?? [])]);

	let showModal = $state(false);
	let customDuration = $state(false);
	let submitted = $state(false);

	const submitStatus = () => {
		submitted = true;
		return async ({ update }) => {
			submitted = false;
			await update();
			closeModal();
		};
	};

	run(() => {
		if (form?.errors) {
			let interval = 100;
			form.errors.forEach((err) => {
				setTimeout(() => {
					toast.push(err.message);
					interval += 300;
				}, interval);
			});
		}
	});

	function openModal() {
		showModal = true;
	}

	function closeModal() {
		showModal = false;
	}
</script>

<Wrapper>
	<div class="flex flex-col w-full h-full gap-12 items-center justify-center">
		<div class="w-full p-4 mt-12">
			<div class="mt-4 flex justify-between items-end w-full">

				<div>

					<p class=" text-4xl">Today
						
					</p>
					<p class="font-serif">{formatDateTitle(new Date())}</p>
				</div>
				<button onclick={openModal} class="flex items-center bg-stone-100 gap-2 py-2 h-fit rounded-full">
					&nbsp;&nbsp;&nbsp;
					<Icon icon="material-symbols:add-task-rounded" />
					Track new habit &nbsp;&nbsp;&nbsp;
				</button>
			</div>
			<div class="flex gap-2 flex-col transition-all duration-300 mt-4">
				{#each $projects as project (project.id)}
					<Tasktoday details={project} done={project.completed} />
				{/each}
			</div>
		</div>
		<div class="w-full mx-auto flex items-center flex-wrap justify-center pb-20">
			<div class=" flex flex-wrap gap-2 px-3 md:px-0">
				{#each streaks as streak (streak.id)}
					{#if !(getDaysDiff(streak.createdAt) > streak.duration || streak.streakArray[streak.streakArray.length - 1] == 1)}
						<Streakcard details={streak} />
					{/if}
				{:else}
					<p class="col-span-full text-center text-gray-600">Nothing to show</p>
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

	{#if showModal}
		<!-- Modal Backdrop -->
		<div
			class="fixed inset-0 bg-black/30 bg-opacity-50 z-50 flex items-end md:items-center justify-center"
			
		>
			<!-- Modal Content -->
			<div
				class="modal-content bg-white w-full  md:max-w-2xl md:rounded-lg shadow-lg transform transition-transform duration-300 ease-out md:translate-y-0 translate-y-0 md:scale-100 scale-100"
			>
				<!-- Close Button -->
				<button
					class="absolute top-4 right-4 text-gray-500 hover:text-gray-700 "
					onclick={closeModal}
				>
					<Icon icon="mdi:close" />
				</button>

				<div class="p-6 md:p-8">
					<div class="flex flex-col gap-4">
						<div class="text-center">
							<h1 class="text-2xl md:text-4xl font-bold">I Will..</h1>
						</div>

						<form
							use:enhance={submitStatus}
							action="?/new"
							method="post"
							class="flex flex-col gap-4"
						>
							<label class="flex flex-col gap-2">
								Title
								<input
									type="text"
									class="w-full h-full bg-stone-100 p-2 rounded-lg"
									name="title"
									placeholder="Meditate for thirty minutes"
									required
								/>
							</label>
							{#if customDuration}
								<label in:scale class="">
									Duration
									<input
										type="number"
										name="duration"
										class="p-2 rounded-lg bg-stone-100"
										min="7"
										max="62"
										required
									/>
								</label>
							{:else}
								<DurationVisualizer />
							{/if}
							<div>
								<label>
									Custom Duration
									<input type="checkbox" name="custom" bind:checked={customDuration} />
								</label>
							</div>

							<div>
								<RewardInput />
							</div>
							<div>
								<ColorSelector />
							</div>

							<button
								type="submit"
								class="flex items-center justify-center gap-2 p-2 bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-full"
							>
								{#if submitted}
									<span>
										<Icon icon="svg-spinners:gooey-balls-1" />
									</span>
								{/if}
								<span>Start</span>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	{/if}
</Wrapper>

<style>
	/* Bottom sheet animation */
	@media (max-width: 768px) {
		.modal-content {
			transform: translateY(100%);
			animation: slideUp 0.3s ease-out forwards;
		}
	}

	@keyframes slideUp {
		from {
			transform: translateY(100%);
		}
		to {
			transform: translateY(0);
		}
	}
</style>
