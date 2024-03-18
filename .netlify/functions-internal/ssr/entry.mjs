import { renderers } from './renderers.mjs';
import { manifest } from './manifest_cYnTHMZs.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Bfxnbh85.mjs');
const _page1 = () => import('./chunks/forgot-password_CIlX4vhp.mjs');
const _page2 = () => import('./chunks/main_BU25E66-.mjs');
const _page3 = () => import('./chunks/new-password_1WKM3QDm.mjs');
const _page4 = () => import('./chunks/validate-email_VRWwv7oh.mjs');
const _page5 = () => import('./chunks/index_BN9yKOqv.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.5.5_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/forgot-password.astro", _page1],
    ["src/pages/main.astro", _page2],
    ["src/pages/new-password.astro", _page3],
    ["src/pages/validate-email.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "1ffaa4b4-29fc-4273-ba52-afc45afc9dfe"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
