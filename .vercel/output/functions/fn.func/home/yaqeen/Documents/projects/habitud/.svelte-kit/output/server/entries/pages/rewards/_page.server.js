import { p as prisma } from "../../../chunks/prisma.js";
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
  load
};
