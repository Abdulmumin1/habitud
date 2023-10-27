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
	<div class="p-4 md:p-12 flex items-center justify-center w-full">
		<div class="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
			<Achievementcard />
			<Achievementcard />
			<Achievementcard />
			<Achievementcard />
			<Achievementcard />
		</div>
	</div>
</Wrapper>
