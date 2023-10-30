import { c as create_ssr_component, f as escape, v as validate_component } from "../../../chunks/ssr.js";
import "feather-icons";
import { I as Icon, W as Wrapper } from "../../../chunks/wrapper.js";
const Achievementcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { details } = $$props;
  let title = details?.title;
  let description = details?.description;
  let icon = details?.icon;
  let color = details?.color;
  if ($$props.details === void 0 && $$bindings.details && details !== void 0)
    $$bindings.details(details);
  return `<div class="${"max-w-[300px] w-full gap-6 h-[200px] p-2 bg-" + escape(color, true) + "-100 rounded-lg flex items-center justify-center flex-col"}"><div class="flex items-center"><span class="mr-2">${validate_component(Icon, "Icon").$$render($$result, { class: "text-3xl", icon }, {}, {})}</span> <h3 class="text-lg leading-none font-semibold">${escape(title)}</h3></div> <p class="text-gray-600">${escape(description)}</p></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<p class="p-4 mt-12 text-5xl" data-svelte-h="svelte-185gy0u">Achievements</p> <div class="p-4 flex flex-col items-center justify-center w-full"><div class="w-full gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">${validate_component(Achievementcard, "Achievementcard").$$render(
        $$result,
        {
          details: {
            title: "First Achievement",
            description: "You unlocked your first achievement!",
            icon: "mdi:trophy",
            color: "orange"
          }
        },
        {},
        {}
      )} </div></div>`;
    }
  })}`;
});
export {
  Page as default
};
