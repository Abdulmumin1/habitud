import * as server from '../entries/pages/rewards/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/rewards/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/rewards/+page.server.js";
export const imports = ["_app/immutable/nodes/6.8545eba0.js","_app/immutable/chunks/scheduler.f9761f20.js","_app/immutable/chunks/index.ff8ba8f7.js","_app/immutable/chunks/each.f852ad0c.js","_app/immutable/chunks/wrapper.0864382e.js","_app/immutable/chunks/index.a93bd50e.js","_app/immutable/chunks/stores.4d9db4ba.js","_app/immutable/chunks/singletons.b69217b0.js","_app/immutable/chunks/index.7ad99811.js"];
export const stylesheets = ["_app/immutable/assets/wrapper.b591e539.css"];
export const fonts = [];
