import * as server from '../entries/pages/streaks/new/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/streaks/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/streaks/new/+page.server.js";
export const imports = ["_app/immutable/nodes/8.3fb561e5.js","_app/immutable/chunks/scheduler.f9761f20.js","_app/immutable/chunks/index.ff8ba8f7.js","_app/immutable/chunks/wrapper.0864382e.js","_app/immutable/chunks/index.a93bd50e.js","_app/immutable/chunks/stores.4d9db4ba.js","_app/immutable/chunks/singletons.b69217b0.js","_app/immutable/chunks/index.7ad99811.js","_app/immutable/chunks/each.f852ad0c.js","_app/immutable/chunks/forms.c9a3f458.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/navigation.1cd82c10.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.e90d77a5.js"];
export const stylesheets = ["_app/immutable/assets/8.a1e7a803.css","_app/immutable/assets/wrapper.b591e539.css","_app/immutable/assets/SvelteToast.126e14af.css"];
export const fonts = [];
