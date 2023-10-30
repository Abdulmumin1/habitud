import { c as create_ssr_component, d as add_attribute, e as each, f as escape, g as null_to_empty, v as validate_component } from "../../../../chunks/ssr.js";
import { I as Icon, W as Wrapper } from "../../../../chunks/wrapper.js";
import "devalue";
import { t as toast } from "../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
const durationSlider_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".move.svelte-qb16px:last-child{margin-left:-48px}.move-a.svelte-qb16px{margin-left:48px}",
  map: null
};
const DurationSlider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let progress = 7;
  const milestones = [7, 14, 21, 30];
  const weeks = {
    7: "1wk",
    14: "2wks",
    21: "3wks",
    30: "month"
  };
  $$result.css.add(css$1);
  return `<div class="h-full py-4 flex flex-col gap-4 w-full justify-center"><div class="bg-orange-100 rounded-xl"><input min="7" max="30" type="number" name="duration" class="hidden" required${add_attribute("value", progress, 0)}> <div class="flex flex-col relative w-full h-4 rounded-xl move svelte-qb16px">${each(milestones, (milestone) => {
    return `<button type="button" class="${[
      "text-[10px] absolute translate-y-1/3 z-10 w-12 h-12 bottom-0 border-2 border-orange-300 rounded-full cursor-pointer transition-colors duration-300",
      (progress >= milestone ? "bg-orange-300" : "") + " " + (!(progress >= milestone) ? "bg-white" : "")
    ].join(" ").trim()}" style="${"left: " + escape(milestone / 30 * 100, true) + "%;"}">${escape(weeks[milestone])}</button>`;
  })} <div class="absolute move-a h-4 bg-orange-300 transition-all duration-300 rounded-lg svelte-qb16px" style="${"width: " + escape(progress / 30 * 100, true) + "%;"}"></div></div></div>  </div>`;
});
const colorSelector_svelte_svelte_type_style_lang = "";
const css = {
  code: ".color-box.svelte-8beukz{width:100px;height:100px;margin:10px}",
  map: null
};
const ColorSelector = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const colors = [
    "bg-slate-300",
    "bg-gray-300",
    "bg-zinc-300",
    "bg-neutral-300",
    "bg-stone-300",
    "bg-red-300",
    "bg-orange-300",
    "bg-amber-300",
    "bg-yellow-300",
    "bg-lime-300",
    "bg-green-300",
    "bg-emerald-300",
    "bg-teal-300",
    "bg-cyan-300",
    "bg-sky-300",
    "bg-blue-300",
    "bg-indigo-300",
    "bg-violet-300",
    "bg-purple-300",
    "bg-fuchsia-300",
    "bg-pink-300",
    "bg-rose-300"
  ];
  let colorSelected = "orange";
  $$result.css.add(css);
  return `<div class="${"p-2 rounded-xl flex flex-col gap-2 bg-" + escape(colorSelected, true) + "-100 transition-colors duration-300 first-letter: svelte-8beukz"}"><p class="${"py-3 px-2 rounded-lg text-base md:text-xl bg-" + escape(colorSelected, true) + "-200 transition-colors duration-300 svelte-8beukz"}">Select Color</p> <input type="text" name="color" id="" class="hidden"${add_attribute("value", colorSelected, 0)}> <div class="grid grid-cols-7 gap-2 bg-white p-1 rounded-xl">${each(colors, (color) => {
    return `<button type="button" class="${escape(null_to_empty(`w-full max-w-2 h-full rounded-lg transition-all active:scale-90 duration-300 ${color}`), true) + " svelte-8beukz"}" style="aspect-ratio: 1/1;"><span class="hidden">${escape(color)}</span></button>`;
  })}</div> </div>`;
});
const RewardInput = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let icon;
  icon = "solar:info-square-linear";
  return `<label class="flex gap-2 flex-col">Reward I will give myself (optional):
	<div class="flex gap-2 items-center"><input type="text" name="reward" class="bg-orange-100 p-2 rounded-lg w-full" placeholder="Example: I will treat myself to a nice meal"> <button type="button">${validate_component(Icon, "Icon").$$render($$result, { icon }, {}, {})}</button></div> ${``}</label>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let customDuration = false;
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  {
    if (form?.errors) {
      let interval = 100;
      form.errors.forEach((err) => {
        setTimeout(
          () => {
            toast.push(err.message);
            interval += 300;
          },
          interval
        );
      });
    }
  }
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="flex flex-col gap-4 px-6 max-w-[530px]"><div class="h-[200px] flex items-center" data-svelte-h="svelte-16utucj"><h1 class="text-4xl">Track New</h1></div> <form action="?/new" method="post" class="flex flex-col gap-4"><label class="flex flex-col gap-2" data-svelte-h="svelte-12va3ub">Title
				<input type="text" class="w-full h-full bg-orange-100 p-2 rounded-lg" name="title" id="" placeholder="Meditate for thirty minutes" required></label> ${`${validate_component(DurationSlider, "DurationVisualizer").$$render($$result, {}, {}, {})}`} <div><label>Custom Duration
					<input type="checkbox" name="custom" id=""${add_attribute("checked", customDuration, 1)}></label></div> <div>${validate_component(RewardInput, "RewardInput").$$render($$result, {}, {}, {})}</div> <div>${validate_component(ColorSelector, "ColorSelector").$$render($$result, {}, {}, {})}</div> <button type="submit" class="flex items-center justify-center gap-2 p-2 bg-orange-200 rounded-lg">${``} <span data-svelte-h="svelte-1oo1guu">Start</span></button></form> </div>`;
    }
  })}`;
});
export {
  Page as default
};
