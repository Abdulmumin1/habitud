<script>
	import HankoProfile from '$components/auth/HankoProfile.svelte';
	import Wrapper from '$components/streak/wrapper.svelte';
</script>

<Wrapper>
	<div class="h-screen flex items-center">
		<div class="flex flex-col items-center font-semibold gap-4">
			<h1 class="text-4xl">Settings</h1>
			<HankoProfile />
		</div>
	</div>
</Wrapper>
