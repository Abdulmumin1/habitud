// import { streakCollection } from '$db/streaks';

// /** @type {import('./$types').PageLoad} */
// export async function load() {
// 	const data = await streakCollection.find().toArray();
// 	console.log(data);
// }

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
