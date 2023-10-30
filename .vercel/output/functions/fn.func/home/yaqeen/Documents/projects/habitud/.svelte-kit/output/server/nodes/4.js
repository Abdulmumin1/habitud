

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/achievements/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.937d3631.js","_app/immutable/chunks/scheduler.f9761f20.js","_app/immutable/chunks/index.ff8ba8f7.js","_app/immutable/chunks/wrapper.0864382e.js","_app/immutable/chunks/index.a93bd50e.js","_app/immutable/chunks/stores.4d9db4ba.js","_app/immutable/chunks/singletons.b69217b0.js","_app/immutable/chunks/index.7ad99811.js"];
export const stylesheets = ["_app/immutable/assets/wrapper.b591e539.css"];
export const fonts = [];
