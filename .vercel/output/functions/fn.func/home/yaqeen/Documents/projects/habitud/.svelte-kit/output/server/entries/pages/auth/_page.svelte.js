import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../chunks/ssr.js";
import "@teamhanko/hanko-elements";
import { p as public_env } from "../../../chunks/shared-server.js";
import { p as page } from "../../../chunks/stores.js";
import { S as Streakcard } from "../../../chunks/streakcard.js";
const HankoAuth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  public_env.PUBLIC_HANKO_API_URL;
  $$unsubscribe_page();
  return `<hanko-auth></hanko-auth>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex w-full h-screen flex-col md:flex-row items-center justify-center"><div class="h-full p-12 px-12 bg-orange-300 gap-6 hidden md:flex flex-col w-fit"><p class="text-6xl" data-svelte-h="svelte-x3d7vk">Habitud</p> <div class="relative">${validate_component(Streakcard, "StreakCard").$$render(
    $$result,
    {
      title: "Run a mile.",
      duration: 30,
      color: "orange"
    },
    {},
    {}
  )} ${validate_component(Streakcard, "StreakCard").$$render(
    $$result,
    {
      title: "Run a mile.",
      duration: 30,
      color: "blue",
      classlist: "top-8 right-8 absolute"
    },
    {},
    {}
  )} </div></div> <div class="w-full flex items-center justify-center flex-col"><p class="text-6xl md:hidden text-center mt-12" data-svelte-h="svelte-1e63cf9">Habitud</p> ${validate_component(HankoAuth, "HankoAuth").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
