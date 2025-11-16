<script>
	import Icon from '@iconify/svelte';
	import RewardInfo from '$components/streak/new/rewardInfo.svelte';

	let showInfo = $state(false);
	let icon = $derived(showInfo ? 'material-symbols:close' : 'solar:info-square-linear');

	function toogleShowInfo() {
		showInfo = !showInfo;
	}
</script>

<label class="flex gap-2 flex-col">
	Reward I will give myself (optional):
	<div class="flex gap-2 items-center">
		<input
			type="text"
			name="reward"
			class="bg-stone-100 p-2 rounded-lg w-full"
			placeholder="Example: I will treat myself to a nice meal"
		/>
		<button type="button" onclick={toogleShowInfo}>
			<Icon {icon} />
		</button>
	</div>
	{#if showInfo}
		<RewardInfo />
	{/if}
</label>
