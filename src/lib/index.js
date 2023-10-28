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

export function formatDate(dateString) {
	// Create a Date object from the provided date string
	const dateObject = new Date(dateString);

	// Define an array of day names
	const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	// Get the day of the week, month, and day
	const dayOfWeek = dayNames[dateObject.getUTCDay()];
	const month = dateObject.toLocaleString('en-US', { month: 'short' });
	const day = dateObject.getUTCDate();

	// Create the desired string
	const result = `${dayOfWeek} ${month} ${day}`;

	return result;
}
