import { prisma } from '$db/prisma';

/** @type {import('./$types').Actions} */
export const actions = {
	updateStreak: async ({ request }) => {
		let body = Object.fromEntries(await request.formData());
		body = JSON.parse(body.details);
		console.log(body);
		// By unique identifier
		//
		// });

		let streakArray;
		try {
			streakArray = JSON.parse(body.streakArray);
		} catch (err) {
			streakArray = body.streakArray;
			console.error(err);
		}

		// Create a Date object for the provided date string
		const providedDate = new Date(body.createdAt);

		// Get today's date
		const today = new Date();

		// Calculate the time difference in milliseconds
		const timeDifference = Math.abs(providedDate - today);

		// Convert the time difference into days
		const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

		console.log(`Days difference: ${daysDifference}`);

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
	const streaks = loadStreask(currentUserId);

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
