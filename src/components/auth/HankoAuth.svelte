<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { register } from '@teamhanko/hanko-elements';
	import { env } from '$env/dynamic/public';
	import { page } from '$app/state';
	const hankoApi = env.PUBLIC_HANKO_API_URL;

	const redirectAfterLogin = () => {
		let redirect = page.url.searchParams.get('redirectTo');
		goto(redirect ?? '/streaks');
	};

	onMount(async () => {
		register(hankoApi).catch((error) => {
			// handle error
		});
	});
</script>

<hanko-auth ononAuthFlowCompleted={redirectAfterLogin}></hanko-auth>
