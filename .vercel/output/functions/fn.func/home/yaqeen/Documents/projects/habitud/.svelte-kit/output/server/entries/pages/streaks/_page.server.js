import { p as prisma } from "../../../chunks/prisma.js";
function getDaysDiff(date) {
  const providedDate = new Date(date);
  const today = /* @__PURE__ */ new Date();
  const providedYear = providedDate.getFullYear();
  const providedMonth = providedDate.getMonth();
  const providedDay = providedDate.getDate();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  const daysDifference = Math.floor(
    (Date.UTC(todayYear, todayMonth, todayDay) - Date.UTC(providedYear, providedMonth, providedDay)) / (1e3 * 60 * 60 * 24)
  );
  return daysDifference;
}
const actions = {
  updateStreak: async ({ request }) => {
    let body = Object.fromEntries(await request.formData());
    try {
      body = JSON.parse(body.details);
    } catch (err) {
      console.error(err);
      return;
    }
    let streakArray = body.streakArray;
    let daysDifference = getDaysDiff(body.createdAt);
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
async function load({ parent }) {
  const { currentUserId } = await parent();
  const streaks = loadStreask(currentUserId);
  return { streaks };
}
export {
  actions,
  load
};
