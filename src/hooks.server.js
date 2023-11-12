import { redirect } from '@sveltejs/kit';

import { jwtVerify, createRemoteJWKSet } from 'jose';
import { env } from '$env/dynamic/public';
import { handleRedirect } from '$lib';

const hankoApiUrl = env.PUBLIC_HANKO_API_URL;

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

function isPath(event, path) {
	return event.url.pathname.startsWith(path);
}
export const handle = async ({ event, resolve }) => {
	const verified = await authenticatedUser(event);

	if (
		(isPath(event, '/streaks') ||
			isPath(event, '/completed') ||
			isPath(event, '/achievements') ||
			isPath(event, '/completed') ||
			isPath(event, '/rewards') ||
			isPath(event, '/settings')) &&
		!verified
	) {
		throw redirect(303, handleRedirect(event));
	}
	const response = await resolve(event);
	return response;
};
