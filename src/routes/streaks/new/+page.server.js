import { fail, redirect } from '@sveltejs/kit';
import { prisma } from '$db/prisma';
import { getUserID } from '$lib/index';
function generateArrayList(length) {
	const array = [];
	for (let i = 0; i < length; i++) {
		array.push(0);
	}
	return array;
}

/** @type {import('./$types').Actions} */
export const actions = {
	new: async ({ request, cookies }) => {
		let body = Object.fromEntries(await request.formData());
		const user_id = await getUserID(cookies);
		// console.log(user_id);
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
		throw redirect(303, '/streaks');
	}
};
