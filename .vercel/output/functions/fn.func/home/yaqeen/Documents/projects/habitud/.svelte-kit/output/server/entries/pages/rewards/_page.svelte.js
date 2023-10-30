import { c as create_ssr_component, f as escape, v as validate_component, e as each } from "../../../chunks/ssr.js";
import { I as Icon, W as Wrapper } from "../../../chunks/wrapper.js";
const RewardProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { progress = 2 } = $$props;
  let { maxProgress = 10 } = $$props;
  let { color } = $$props;
  if ($$props.progress === void 0 && $$bindings.progress && progress !== void 0)
    $$bindings.progress(progress);
  if ($$props.maxProgress === void 0 && $$bindings.maxProgress && maxProgress !== void 0)
    $$bindings.maxProgress(maxProgress);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  return `<div class="${"w-full bg-" + escape(color, true) + "-200 p-1 rounded-[12px]"}" style="border-radius: 12px;">${progress == maxProgress ? `<div class="inline items-center justify-center" data-svelte-h="svelte-ae1tq3"> <span>Completed</span></div>` : `<div class="${"bg-" + escape(color, true) + "-300 text-white text-center rounded-lg h-2"}" style="${"width:" + escape(progress / maxProgress * 100, true) + "%;"}"></div>`}</div>`;
});
const Rewardcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { details } = $$props;
  let title = details?.title;
  let description = details?.reward;
  let color = details?.color;
  function getDaysDiff() {
    const providedDate = new Date(details.createdAt);
    const today = /* @__PURE__ */ new Date();
    const providedYear = providedDate.getFullYear();
    const providedMonth = providedDate.getMonth();
    const providedDay = providedDate.getDate();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDay = today.getDate();
    const daysDifference = Math.floor((Date.UTC(todayYear, todayMonth, todayDay) - Date.UTC(providedYear, providedMonth, providedDay)) / (1e3 * 60 * 60 * 24));
    return daysDifference;
  }
  let progress = getDaysDiff() + 1;
  let maxProgress = details.duration;
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  return `<div class="${"w-full gap-1 p-4 bg-" + escape(color, true) + "-100 rounded-lg flex justify-center flex-col"}"><div class="flex items-center gap-2"><span class="mr-2 flex items-center justify-center">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      class: "text-3xl ",
      icon: "streamline:interface-favorite-award-ribbon-reward-like-social-rating-media"
    },
    {},
    {}
  )}</span> <div class="block"><h3 class="text-lg leading-none">${escape(description)}</h3> <p class="text-gray-600">${escape(title)}</p></div></div> ${validate_component(RewardProgress, "RewardProgress").$$render($$result, { progress, maxProgress, color }, {}, {})}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let streaks = data.streaks;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="mt-12 flex gap-4 flex-col"><p class="p-4 text-5xl" data-svelte-h="svelte-gs15or">Rewards</p> <div class="flex flex-wrap gap-2 p-4 w-full">${streaks.length ? each(streaks, (streak) => {
        return `${!streak.reward == "" ? `${validate_component(Rewardcard, "RewardCard").$$render($$result, { details: streak }, {}, {})}` : ``}`;
      }) : `<p class="col-span-full text-center text-gray-600" data-svelte-h="svelte-emh1ry">Nothing to show</p>`}</div></div>`;
    }
  })}`;
});
export {
  Page as default
};
