

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.91327b62.js","_app/immutable/chunks/scheduler.f9761f20.js","_app/immutable/chunks/index.ff8ba8f7.js","_app/immutable/chunks/stores.4d9db4ba.js","_app/immutable/chunks/singletons.b69217b0.js","_app/immutable/chunks/index.7ad99811.js"];
export const stylesheets = [];
export const fonts = [];
