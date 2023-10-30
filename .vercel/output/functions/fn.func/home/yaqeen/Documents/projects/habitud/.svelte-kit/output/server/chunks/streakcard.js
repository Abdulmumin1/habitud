import { c as create_ssr_component, f as escape, g as null_to_empty, e as each } from "./ssr.js";
const streakcard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".scale-bit.svelte-sk35c0:active{--tw-scale-x:0.98;--tw-scale-y:0.98;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))\n			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))\n			scaleY(var(--tw-scale-y))}",
  map: null
};
function generateRandomArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.round(Math.random()));
  }
  return array;
}
const Streakcard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "orange" } = $$props;
  let { title } = $$props;
  let { duration = 30 } = $$props;
  let card_number = generateRandomArray(duration).sort().reverse();
  let { classlist } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.classlist === void 0 && $$bindings.classlist && classlist !== void 0)
    $$bindings.classlist(classlist);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(`min-w-[300px] h-fit p-3 rounded-lg flex flex-col gap-2 bg-${color}-100 ${classlist} `), true) + " svelte-sk35c0"}"><div class="${escape(null_to_empty(`flex justify-between items-center bg-${color}-50 rounded-lg  p-2 `), true) + " svelte-sk35c0"}"><div><p class="">${escape(title)}</p> <span class="text-[9px] text-gray-400" data-svelte-h="svelte-49cwta">Started 2,Aug</span></div> <button class="p-2" data-svelte-h="svelte-x5hy8h">#</button></div> <div class="h-fit"><div class="grid grid-cols-7 gap-2">${each(card_number, (g) => {
    return `<button class="${[
      "w-full rounded-md h-8 hover:scale-105 transition-all active:scale-90 duration-300",
      !g ? "bg-white" : ""
    ].join(" ").trim()}"><span class="opacity-0">${escape(g)}</span></button>`;
  })}</div></div> </div>`;
});
export {
  Streakcard as S
};
