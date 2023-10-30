import { c as create_ssr_component, f as escape, b as subscribe, o as onDestroy, g as null_to_empty, v as validate_component, e as each, d as add_attribute } from "../../../chunks/ssr.js";
import { w as writable } from "../../../chunks/index2.js";
import "feather-icons";
import { f as formatDate } from "../../../chunks/index3.js";
import "devalue";
import { I as Icon, W as Wrapper } from "../../../chunks/wrapper.js";
const projects = writable([]);
const Cardmenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { details } = $$props;
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  return `<div class="dropdown relative flex flex-col text-center"><button class="dropdown-button flex items-center justify-end gap-2 hover:scale-105 transition-all duration-300 active:scale-95" data-svelte-h="svelte-1lm59mt"><i data-feather="chevron-down" id="chevron-down" class="" stroke-width="2"></i></button> ${``}</div>`;
});
const IndependentCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { details } = $$props;
  details?.color ? details.color : "orange";
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  return `<button type="submit" class="w-full max-w-4 h-full rounded-md transition-all active:scale-90 duration-300" style="aspect-ratio: 1/1;"><span class="opacity-0">${escape(details.state)}</span></button>`;
});
const FlipCard_svelte_svelte_type_style_lang = "";
const streakcard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".scale-bit.svelte-sk35c0:active{--tw-scale-x:0.98;--tw-scale-y:0.98;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))\n			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\n			scaleY(var(--tw-scale-y))}",
  map: null
};
const Streakcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let card_number;
  let $$unsubscribe_projects;
  $$unsubscribe_projects = subscribe(projects, (value) => value);
  let { details = {
    title: "New Task",
    duration: 30,
    color: "orange"
  } } = $$props;
  let title = details.title;
  let duration = details.duration;
  let color = details.color;
  let refElement;
  onDestroy(() => {
    projects.set([]);
  });
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
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  $$result.css.add(css$1);
  details = details;
  card_number = details.streakArray;
  $$unsubscribe_projects();
  return ` <div class="${escape(null_to_empty(`min-w-[100px]  md:max-w-[300px] h-full p-3 rounded-lg flex flex-col gap-2 bg-${color}-100`), true) + " svelte-sk35c0"}"><div class="${escape(null_to_empty(`flex  justify-between  bg-${color}-50 rounded-lg  p-2 transition-transform duration-300`), true) + " svelte-sk35c0"}"><div><p class="transition-all duration-300">${escape(title)}</p> <div class="flex gap-2"><span class="text-[9px] text-gray-400">Started ${escape(formatDate(details.createdAt))}</span> <span class="text-[9px]">${escape(`${getDaysDiff() + 1}/${details.duration}`)}</span></div></div> ${validate_component(Cardmenu, "Cardmenu").$$render($$result, { details }, {}, {})}</div> <div class="h-full"><div class="grid grid-cols-7 gap-2">${each(card_number, (state) => {
    return `${validate_component(IndependentCard, "IndependentCard").$$render($$result, { details: { state, color: details.color } }, {}, {})}`;
  })}</div></div> ${getDaysDiff() + 1 == duration ? `<div class="${"w-full bg-" + escape(color, true) + "-300 flex items-center gap-4 p-4 rounded-md scale-bit transition-all duration-300 svelte-sk35c0"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:done-all-rounded"
    },
    {},
    {}
  )}

			Congratulations, Completed</div>` : `${card_number[getDaysDiff()] == 1 ? `<div class="${"w-full bg-" + escape(color, true) + "-300 flex items-center gap-4 p-4 rounded-md scale-bit transition-all duration-300 svelte-sk35c0"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:done-all-rounded"
    },
    {},
    {}
  )}

			Today Completed</div>` : `<div class="w-full"><form method="post" action="?/updateStreak"><input name="details"${add_attribute("value", JSON.stringify(details), 0)} class="hidden"> <button class="w-full bg-white flex items-center gap-4 p-4 rounded-md scale-bit transition-all duration-300 svelte-sk35c0"${add_attribute("this", refElement, 0)}>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "material-symbols:done-all-rounded"
    },
    {},
    {}
  )}
					Mark today
					</button></form></div>`}`}</div> `;
});
const tasktoday_svelte_svelte_type_style_lang = "";
const css = {
  code: ".scale-bit.svelte-di80qm:active{--tw-scale-x:0.994;--tw-scale-y:0.994;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))\n			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\n			scaleY(var(--tw-scale-y))}",
  map: null
};
const Tasktoday = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { details } = $$props;
  let title = details.title;
  let color = details.color;
  details?.refElement;
  let { done = false } = $$props;
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  if ($$props.done === void 0 && $$bindings.done && done !== void 0)
    $$bindings.done(done);
  $$result.css.add(css);
  return `<div><input name="details"${add_attribute("value", JSON.stringify(details), 0)} class="hidden"> <button class="${[
    escape(null_to_empty(`w-full flex text-left justify-between p-4 rounded-lg bg-${color}-100 scale-bit transition-all duration-300 `), true) + " svelte-di80qm",
    done ? "line-through" : ""
  ].join(" ").trim()}">${escape(title)} </button> </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $projects, $$unsubscribe_projects;
  $$unsubscribe_projects = subscribe(projects, (value) => $projects = value);
  projects.set([]);
  let { data } = $$props;
  let streaks = [...data.streaks];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_projects();
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col w-full h-full gap-12"><div class="h-[45%] p-4 md:p-4 mt-12 flex justify-center flex-col gap-4 rounded-b-xl mx-2"><p class="text-5xl" data-svelte-h="svelte-1ke9ok3">Today</p> <div class="flex gap-2 flex-col transition-all duration-300">${each($projects, (project) => {
        return `${validate_component(Tasktoday, "Tasktoday").$$render(
          $$result,
          {
            details: project,
            done: project.completed
          },
          {},
          {}
        )}`;
      })}</div> <a href="streaks/new" class="bg-orange-300 flex items-center justify-center gap-2 p-2 rounded-lg w-fit px-6 active:scale-95 transition-transform duration-300">Track new habit
				${validate_component(Icon, "Icon").$$render(
        $$result,
        {
          icon: "material-symbols:add-task-rounded"
        },
        {},
        {}
      )}</a></div> <div class="w-full flex items-center justify-center"><div class="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-4">${streaks.length ? each(streaks, (streak) => {
        return `${validate_component(Streakcard, "Streakcard").$$render($$result, { details: streak }, {}, {})}`;
      }) : `<p class="col-span-full text-center text-gray-600" data-svelte-h="svelte-emh1ry">Nothing to show</p>`} </div></div></div>`;
    }
  })}`;
});
export {
  Page as default
};
