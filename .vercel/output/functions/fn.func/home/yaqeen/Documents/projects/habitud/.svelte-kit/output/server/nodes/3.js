

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.8c93b6b5.js","_app/immutable/chunks/scheduler.f9761f20.js","_app/immutable/chunks/index.ff8ba8f7.js","_app/immutable/chunks/streakcard.6a4fe4e7.js","_app/immutable/chunks/each.f852ad0c.js"];
export const stylesheets = ["_app/immutable/assets/streakcard.9b4b71c8.css"];
export const fonts = [];
