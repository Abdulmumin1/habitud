<script>
	import '../app.css';
	import '../tailwind.css';

	import feather from 'feather-icons';
	import { onMount } from 'svelte';

	// import { Hanko } from '@teamhanko/hanko-elements';
	// import { env } from '$env/dynamic/public';

	// const hankoApiUrl = env.PUBLIC_HANKO_API_URL;

	// const hanko = new Hanko(hankoApiUrl);

	// /** @type {import('./$types').PageLoad} */
	// async function getUser() {
	// 	const { id, email } = await hanko.user.getCurrent();
	// 	// setContext('currentUser', { id, email });
	// 	// console.log(`user-id: ${id}, email: ${email}`);
	// }

	onMount(async () => {
		feather.replace();
	});
</script>

<slot />
