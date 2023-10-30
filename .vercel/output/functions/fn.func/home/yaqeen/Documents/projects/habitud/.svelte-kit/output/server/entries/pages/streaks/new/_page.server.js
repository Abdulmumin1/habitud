import { f as fail, r as redirect } from "../../../../chunks/index.js";
import { p as prisma } from "../../../../chunks/prisma.js";
import { g as getUserID } from "../../../../chunks/index3.js";
import { z } from "zod";
const streakSchema = z.object({
  title: z.string().min(5, { message: "Title must be greater than 5 characters" }).max(100, { message: "Title must not be greater than 100" }),
  duration: z.number().min(7, { message: "Duration must be at least 7" }).max(62, { message: "Duration must be at most 62" }),
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
const actions = {
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
      console.log("entry created");
    } catch (err) {
      console.log(err);
      return fail(500, { message: "unable to complete action" });
    }
    throw redirect(303, "/streaks");
  }
};
export {
  actions
};
