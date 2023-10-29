<script>
	import Icon from '@iconify/svelte';

	export let progress = 2; // Set the initial progress value
	export let maxProgress = 10; // Set the maximum progress value
	export let color;
</script>

<div class="w-full bg-{color}-200 p-1 rounded-[12px]" style="border-radius: 12px;">
	<div
		class="bg-{color}-300 text-white text-center rounded-lg"
		style="width:{(progress / maxProgress) * 100}%;"
	>
		<span class="opacity-0">{progress}/{maxProgress}</span>
		{#if progress == maxProgress}
			<div class="inline items-center justify-center">
				<!-- <span>
					<Icon icon="material-symbols:done-all-rounded" />
				</span> -->
				<span> Completed </span>
			</div>
		{/if}
	</div>
</div>
