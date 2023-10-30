import * as universal from '../entries/pages/streaks/_layout.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/streaks/+layout.js";
export const imports = ["_app/immutable/nodes/2.abf14bdd.js","_app/immutable/chunks/scheduler.f9761f20.js","_app/immutable/chunks/index.ff8ba8f7.js"];
export const stylesheets = [];
export const fonts = [];
