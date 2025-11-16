import { prisma } from '$db/prisma';

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
