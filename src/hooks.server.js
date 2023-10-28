import { redirect } from '@sveltejs/kit';

import { jwtVerify, createRemoteJWKSet } from 'jose';
import { env } from '$env/dynamic/public';
import { handleRedirect } from '$lib';

const hankoApiUrl = env.PUBLIC_HANKO_API_URL;

// import { start_mongo } from '$db/mongo';
// // console.log(hankoApiUrl);

// start_mongo()
// 	.then(() => {
// 		console.log('mongodb started!');
// 	})
// 	.catch((e) => {
// 		console.error(e);
// 	});

const authenticatedUser = async (event) => {
	const { cookies } = event;
	const hanko = cookies.get('hanko');
	const JWKS = createRemoteJWKSet(new URL(`${hankoApiUrl}/.well-known/jwks.json`));

	try {
		await jwtVerify(hanko ?? '', JWKS);
		return true;
	} catch {
		return false;
	}
};

export const handle = async ({ event, resolve }) => {
	const verified = await authenticatedUser(event);

	if (event.url.pathname.startsWith('/streaks') && !verified) {
		throw redirect(303, handleRedirect(event));
	}
	const response = await resolve(event);
	return response;
};
