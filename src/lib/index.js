/** Dispatch event on click outside of node */
export function clickOutside(node) {
	const handleClick = (event) => {
		if (node && !node.contains(event.target) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside', node));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
//

export function handleRedirect(event) {
	const redirectTo = event.url.pathname + event.url.search;
	return `/auth?redirectTo=${redirectTo}`;
}

import * as jose from 'jose';

async function userId(cookies) {
	const token = cookies.get('hanko');
	const payload = jose.decodeJwt(token ?? '');

	const userID = payload.sub;
	return userID;
}

export async function getUserID(cookies) {
	let user_id = await userId(cookies);
	return user_id;
}
