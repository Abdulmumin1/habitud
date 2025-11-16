<script>
	import Icon from '@iconify/svelte';

	let { details } = $props();
	let title = details?.title;
	let description = details?.description;
	let icon = details?.icon;
	let color = details?.color;
	let unlocked = details?.unlocked ?? true; // Assume unlocked if not specified

	// console.log(details.title);
</script>

<div
	class=" max-w-[300px] w-full gap-6 h-[200px] p-2 bg-{color}-100 rounded-lg flex items-center justify-center flex-col {unlocked
		? ''
		: 'opacity-50 grayscale'}"
>
	<div class="flex items-center">
		<span class="mr-2">
			<Icon class="text-3xl" {icon} />
		</span>
		<h3 class="text-lg leading-none font-semibold">{title}</h3>
	</div>
	<p class=" text-gray-600">{description}</p>
	{#if !unlocked}
		<p class="text-xs text-gray-400 mt-2">Locked</p>
	{/if}
</div>
