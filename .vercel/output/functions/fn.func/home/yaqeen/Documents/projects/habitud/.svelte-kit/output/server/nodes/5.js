import * as universal from '../entries/pages/auth/_page.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/auth/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/auth/+page.js";
export const imports = ["_app/immutable/nodes/5.a022bcb8.js","_app/immutable/chunks/scheduler.f9761f20.js","_app/immutable/chunks/index.ff8ba8f7.js","_app/immutable/chunks/navigation.1cd82c10.js","_app/immutable/chunks/singletons.b69217b0.js","_app/immutable/chunks/index.7ad99811.js","_app/immutable/chunks/stores.4d9db4ba.js","_app/immutable/chunks/streakcard.6a4fe4e7.js","_app/immutable/chunks/each.f852ad0c.js"];
export const stylesheets = ["_app/immutable/assets/streakcard.9b4b71c8.css"];
export const fonts = [];
