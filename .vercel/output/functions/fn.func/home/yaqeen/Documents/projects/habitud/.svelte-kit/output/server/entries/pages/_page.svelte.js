import { c as create_ssr_component, v as validate_component, d as add_attribute, f as escape } from "../../chunks/ssr.js";
import { S as Streakcard } from "../../chunks/streakcard.js";
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="h-[80dvh] w-full overflow-hidden flex text-center items-center justify-center bg-orange-100" data-svelte-h="svelte-12bp7k5"><div class="max-w-[800px]"><h1 class="text-[2.4rem] p-4 md:text-[4.5rem] leading-none text-orange-500 font-bold">Track your HABITS,<br> MASTER your LIFE</h1></div></div>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full flex items-center justify-center p-4 border-b-2 border-orange-200" data-svelte-h="svelte-vedaem"><ul class="w-full md:w-[80%] flex justify-between items-center"><li class="text-xl md:text-3xl">Habitud <span class="bg-orange-300 rounded-lg p-1 rotate-12 text-[9px] h-fit">beta</span></li> <ul class="flex items-center justify-center gap-2"><li>Features</li> <li>About</li> <li><a href="/auth">Sign Up</a></li></ul></ul></div>`;
});
const Track = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="group p-4 md:p-6 flex min-h-screen flex-col md:flex-row items-center justify-center gap-2"><div class="flex flex-col" data-svelte-h="svelte-51txfo"><p class="text-4xl max-w-2xl group-[game]:">See your progress over time and stay motivated.</p> <p>People who fail to learn from history, are doomed to repeat it!</p></div> <div class="h-[400px] w-full max-w-[400px] relative">${validate_component(Streakcard, "Streakcard").$$render(
    $$result,
    {
      title: "Run a mile.",
      duration: 12,
      color: "red",
      classlist: "hidden md:flex  top-0 absolute group-hover:top-[-4px] transition-all duration-300"
    },
    {},
    {}
  )} ${validate_component(Streakcard, "Streakcard").$$render(
    $$result,
    {
      title: "Take yoga class",
      duration: 30,
      color: "emerald",
      classlist: "top-24 right-0 md:absolute group-hover:top-[64px] transition-all duration-300"
    },
    {},
    {}
  )} ${validate_component(Streakcard, "Streakcard").$$render(
    $$result,
    {
      title: "Meditate for 10 minutes",
      duration: 30,
      color: "orange",
      classlist: "hidden md:flex top-32 left-[-64px] absolute group-hover:left-[-120px] transition-all duration-300"
    },
    {},
    {}
  )}</div></div>`;
});
const NotificationCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { classlist } = $$props;
  let { color = "orange" } = $$props;
  let { title } = $$props;
  if ($$props.classlist === void 0 && $$bindings.classlist && classlist !== void 0)
    $$bindings.classlist(classlist);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div${add_attribute("class", `flex flex-col bg-${color}-300 rounded-md p-4 ${classlist}`, 0)}><div class="flex justify-between items-center" data-svelte-h="svelte-t47z82"><h4 class="text-black">Notification</h4> <button class="text-white font-bold">X</button></div> <p class="text-white mt-2">${escape(title)}</p></div>`;
});
const Reminder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="overflow-hidden p-4 md:p-0 bg-orange-50 flex flex-col md:flex-row min-h-screen items-center justify-center gap-2 group"><div class="h-[400px] w-full max-w-[400px] flex flex-col gap-2 relative">${validate_component(NotificationCard, "NotificationCard").$$render(
    $$result,
    {
      classlist: "md:absolute top-0 w-full group-hover:top-[-5] transiton-all duration-300   ",
      color: "red",
      title: "Run a mile"
    },
    {},
    {}
  )} ${validate_component(NotificationCard, "NotificationCard").$$render(
    $$result,
    {
      classlist: "md:absolute top-16 right-20 w-full group-hover:right-32 transiton-all duration-300 ",
      color: "emerald",
      title: "Take a yoga class"
    },
    {},
    {}
  )} ${validate_component(NotificationCard, "NotificationCard").$$render(
    $$result,
    {
      classlist: " md:absolute top-32 w-full right-[-102px] group-hover:right-[110px] transiton-all duration-300",
      color: "blue",
      title: "Meditate for 10 minutes"
    },
    {},
    {}
  )} ${validate_component(NotificationCard, "NotificationCard").$$render(
    $$result,
    {
      classlist: "hidden md:flex absolute top-48 bg-emerald-400 w-full group-hover:top-52 transiton-all duration-300 ",
      title: "Write a Journal"
    },
    {},
    {}
  )}</div> <div class="text-2xl font-semibold italic text-center text-slate-900" data-svelte-h="svelte-mtyr6w">Reminders to help you stay on track.</div></div>`;
});
const share_image = "/_app/immutable/assets/share.29d268cb.gif";
const Share = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="p-4 md:p-0 overflow-hidden flex flex-col md:flex-row min-h-screen items-center justify-center gap-2" data-svelte-h="svelte-y20c73"><div class="h-[400px] w-[400px]"><img${add_attribute("src", share_image, 0)} alt=""></div> <div class="text-2xl font-semibold italic text-center text-slate-900">Beautifully
		<span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:rounded-md before:bg-orange-300 relative inline-block"><span class="relative text-white">share</span></span>
		your achievements</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><header><nav>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</nav> ${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}</header> <section>${validate_component(Track, "Track").$$render($$result, {}, {}, {})}</section> <section>${validate_component(Reminder, "Reminder").$$render($$result, {}, {}, {})}</section> <section>${validate_component(Share, "Share").$$render($$result, {}, {}, {})}</section></main>`;
});
export {
  Page as default
};
