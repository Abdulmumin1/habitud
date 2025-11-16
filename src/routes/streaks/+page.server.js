import { prisma } from '$db/prisma';

function getDaysDiff(date) {
	// Create Date objects for the provided date string and today
	const providedDate = new Date(date);
	const today = new Date();
	// today.setDate(today.getDate() - 1); // Subtract 1 day from today

	// Extract year, month, and day components from both dates
	const providedYear = providedDate.getFullYear();
	const providedMonth = providedDate.getMonth();
	const providedDay = providedDate.getDate();

	const todayYear = today.getFullYear();
	const todayMonth = today.getMonth();
	const todayDay = today.getDate();

	// Calculate the difference in days
	const daysDifference = Math.floor(
		(Date.UTC(todayYear, todayMonth, todayDay) -
			Date.UTC(providedYear, providedMonth, providedDay)) /
			(1000 * 60 * 60 * 24)
	);

	return daysDifference;
}

/** @type {import('./$types').Actions} */
export const actions = {
	updateStreak: async ({ request }) => {
		let body = Object.fromEntries(await request.formData());
		try {
			body = JSON.parse(body.details);
		} catch (err) {
			console.error(err);
			return;
		}
		// console.log(body);
		// By unique identifier
		//
		// });

		let streakArray = body.streakArray;

		let daysDifference = getDaysDiff(body.createdAt);
		// console.log(streakArray);
		if (streakArray[daysDifference] != 1) {
			streakArray[daysDifference] = 1;

			console.log(streakArray);

			const updateStreak = await prisma.streaks.update({
				where: {
					id: body.id
				},
				data: {
					streakArray
				}
			});
			console.log(updateStreak);
		}
	}
};

async function loadStreask(currentUserId) {
	const streaksData = await prisma.streaks.findMany({
		where: {
			userId: currentUserId
		}
	});

	return streaksData;
}

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { currentUserId } = await parent();
	const streaks = await loadStreask(currentUserId);

	return { streaks };
}

// /** @type {import('./$types').Actions} */
// export const actions = {
// 	dummies: async ({ request }) => {
// 		const body = Object.fromEntries(await request.formData());
// 		// console.log(body.body);
// 		const result = await streakCollection.insertMany(JSON.parse(body.body));
// 		// display the results of your operation
// 		// console.log(result.insertedIds);
// 	}
// };
