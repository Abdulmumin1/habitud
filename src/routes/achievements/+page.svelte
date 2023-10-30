<script>
	import feather from 'feather-icons';

	import Wrapper from '$components/streak/wrapper.svelte';
	import { onMount } from 'svelte';
	import Achievementcard from '../../components/achivements/achievementcard.svelte';

	onMount(() => {
		feather.replace();
	});
</script>

<Wrapper>
	<p class="p-4 mt-12 text-5xl">Achievements</p>
	<div class="p-4 flex flex-col items-center justify-center w-full">
		<div class="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<Achievementcard
				details={{
					title: 'First Achievement',
					description: 'You unlocked your first achievement!',
					icon: 'mdi:trophy',
					color: 'orange'
				}}
			/>
			<!-- <Achievementcard />
			<Achievementcard />
			<Achievementcard />
			<Achievementcard /> -->
		</div>
	</div>
</Wrapper>
