import { fail, redirect } from '@sveltejs/kit';
import { prisma } from '$db/prisma';
import { getUserID } from '$lib/index';
import { z } from 'zod';

const streakSchema = z.object({
	title: z
		.string()
		.min(5, { message: 'Title must be greater than 5 characters' })
		.max(100, { message: 'Title must not be greater than 100' }),
	duration: z
		.number()
		.min(7, { message: 'Duration must be at least 7' })
		.max(62, { message: 'Duration must be at most 62' }),
	reward: z.string().optional(),
	color: z.string().optional()
});

function generateArrayList(length) {
	const array = [];
	for (let i = 0; i < length; i++) {
		array.push(0);
	}
	return array;
}

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
	new: async ({ request, cookies }) => {
		const formData = Object.fromEntries(await request.formData());
		const user_id = await getUserID(cookies);
		try {
			formData.duration = Number(formData.duration);
		} catch (err) {
			console.log(err);
		}
		const streakData = streakSchema.safeParse(formData);

		if (!streakData.success) {
			const errors = streakData.error.errors.map((error) => {
				return {
					field: error.path[0],
					message: error.message
				};
			});

			return fail(400, { error: true, errors });
		}

		const body = streakData.data;
		let name = body.title;
		let duration = Number(body.duration);
		let arraylist = generateArrayList(duration);
		let reward = body.reward;
		let color = body.color;

		try {
			await prisma.streaks.create({
				data: {
					title: name,
					userId: user_id,
					duration,
					streakArray: arraylist,
					reward,
					color
				}
			});
			console.log('entry created');
		} catch (err) {
			console.log(err);
			return fail(500, { message: 'unable to complete action' });
		}
		redirect(303, '/streaks');
	},
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
