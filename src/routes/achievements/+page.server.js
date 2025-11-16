import { prisma } from '$db/prisma';

const achievements = [
	{
		id: 'first_streak',
		title: 'First Streak',
		description: 'You created your first habit streak!',
		icon: 'mdi:trophy',
		color: 'stone',
		condition: (streaks) => streaks.length > 0
	},
	{
		id: 'week_warrior',
		title: 'Week Warrior',
		description: 'Completed a 7-day streak!',
		icon: 'mdi:calendar-check',
		color: 'stone',
		condition: (streaks) =>
			streaks.some((streak) => streak.streakArray.filter((day) => day === 1).length >= 7)
	},
	{
		id: 'month_master',
		title: 'Month Master',
		description: 'Completed a 30-day streak!',
		icon: 'mdi:calendar-month',
		color: 'stone',
		condition: (streaks) =>
			streaks.some((streak) => streak.streakArray.filter((day) => day === 1).length >= 30)
	},
	{
		id: 'consistency_king',
		title: 'Consistency King',
		description: 'Maintained 5 active streaks!',
		icon: 'mdi:crown',
		color: 'stone',
		condition: (streaks) =>
			streaks.filter(
				(streak) =>
					!streak.streakArray[streak.streakArray.length - 1] ||
					streak.streakArray[streak.streakArray.length - 1] === 0
			).length >= 5
	},
	{
		id: 'habit_builder',
		title: 'Habit Builder',
		description: 'Created 10 different habits!',
		icon: 'mdi:hammer-wrench',
		color: 'stone',
		condition: (streaks) => streaks.length >= 10
	},
	{
		id: 'perfectionist',
		title: 'Perfectionist',
		description: 'Completed 100% of your streaks this month!',
		icon: 'mdi:star',
		color: 'stone',
		condition: (streaks) => {
			const thisMonth = new Date();
			thisMonth.setDate(1);
			const completedThisMonth = streaks.filter((streak) => {
				const created = new Date(streak.createdAt);
				return created >= thisMonth && streak.streakArray[streak.streakArray.length - 1] === 1;
			});
			return completedThisMonth.length === streaks.length && streaks.length > 0;
		}
	}
];

/** @type {import('./$types').PageLoad} */
export async function load({ parent }) {
	const { currentUserId } = await parent();
	const streaks = await prisma.streaks.findMany({
		where: {
			userId: currentUserId
		}
	});

	const userAchievements = achievements.map((achievement) => {
		const { condition, ...rest } = achievement;
		return {
			...rest,
			unlocked: condition(streaks)
		};
	});

	return { achievements: userAchievements };
}
