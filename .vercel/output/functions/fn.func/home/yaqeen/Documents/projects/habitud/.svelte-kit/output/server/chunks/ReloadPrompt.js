import { c as create_ssr_component, b as subscribe } from "./ssr.js";
import { w as writable } from "./index2.js";
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  let sendSkipWaitingMessage;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
    {
      await sendSkipWaitingMessage?.();
    }
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      const { Workbox } = await import("./workbox-window.prod.es5.js");
      wb = new Workbox("/sw.js", { scope: "/", type: "classic" });
      sendSkipWaitingMessage = async () => {
        await wb?.messageSkipWaiting();
      };
      {
        {
          let onNeedRefreshCalled = false;
          const showSkipWaitingPrompt = () => {
            onNeedRefreshCalled = true;
            wb?.addEventListener("controlling", (event) => {
              if (event.isUpdate)
                window.location.reload();
            });
            onNeedRefresh?.();
          };
          wb.addEventListener("installed", (event) => {
            if (typeof event.isUpdate === "undefined") {
              if (typeof event.isExternal !== "undefined") {
                if (event.isExternal)
                  showSkipWaitingPrompt();
                else
                  !onNeedRefreshCalled && onOfflineReady?.();
              } else {
                if (event.isExternal)
                  window.location.reload();
                else
                  !onNeedRefreshCalled && onOfflineReady?.();
              }
            } else if (!event.isUpdate) {
              onOfflineReady?.();
            }
          });
          wb.addEventListener("waiting", showSkipWaitingPrompt);
          wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("/sw.js", r);
        else
          onRegistered?.(r);
      }).catch((e) => {
        onRegisterError?.(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
function useRegisterSW(options = {}) {
  const {
    immediate = true,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  const needRefresh = writable(false);
  const offlineReady = writable(false);
  const updateServiceWorker = registerSW({
    immediate,
    onOfflineReady() {
      offlineReady.set(true);
      onOfflineReady?.();
    },
    onNeedRefresh() {
      needRefresh.set(true);
      onNeedRefresh?.();
    },
    onRegistered,
    onRegisteredSW,
    onRegisterError
  });
  return {
    needRefresh,
    offlineReady,
    updateServiceWorker
  };
}
const ReloadPrompt_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pwa-toast.svelte-141ior1.svelte-141ior1{position:fixed;right:0;bottom:0;margin:16px;padding:12px;border:1px solid #8885;border-radius:4px;z-index:2;text-align:left;box-shadow:3px 4px 5px 0 #8885;background-color:white}.pwa-toast.svelte-141ior1 .message.svelte-141ior1{margin-bottom:8px}.pwa-toast.svelte-141ior1 button.svelte-141ior1{border:1px solid #8885;outline:none;margin-right:5px;border-radius:2px;padding:3px 10px}",
  map: null
};
const ReloadPrompt = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let toast;
  let $needRefresh, $$unsubscribe_needRefresh;
  let $offlineReady, $$unsubscribe_offlineReady;
  const { needRefresh, updateServiceWorker, offlineReady } = useRegisterSW({
    onRegistered(r) {
      console.log(`SW Registered: ${r}`);
    },
    onRegisterError(error) {
      console.log("SW registration error", error);
    }
  });
  $$unsubscribe_needRefresh = subscribe(needRefresh, (value) => $needRefresh = value);
  $$unsubscribe_offlineReady = subscribe(offlineReady, (value) => $offlineReady = value);
  $$result.css.add(css);
  toast = $offlineReady || $needRefresh;
  $$unsubscribe_needRefresh();
  $$unsubscribe_offlineReady();
  return `${toast ? `<div class="pwa-toast svelte-141ior1" role="alert"><div class="message svelte-141ior1">${$offlineReady ? `<span data-svelte-h="svelte-1uzusaj">App ready to work offline</span>` : `<span data-svelte-h="svelte-jdu89s">New content available, click on reload button to update.</span>`}</div> ${$needRefresh ? `<button class="svelte-141ior1" data-svelte-h="svelte-8ag32q">Reload</button>` : ``} <button class="svelte-141ior1" data-svelte-h="svelte-1ff2ewa">Close</button></div>` : ``}`;
});
export {
  ReloadPrompt as default
};
