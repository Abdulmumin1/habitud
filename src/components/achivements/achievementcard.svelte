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
	class="  w-full gap-2  py-3 p-2 bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-lg flex  justify-center flex-col {unlocked
		? ''
		: 'opacity-50 grayscale'}"
>
	<div class="flex items-center ">
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
