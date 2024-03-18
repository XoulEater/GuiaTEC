/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, h as renderComponent, g as renderSlot, m as maybeRenderHead } from '../astro_BwF39fxP.mjs';
/* empty css                         */

const $$Astro$1 = createAstro("https://xouleater.github.io");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, userType } = Astro2.props;
  return renderTemplate`<html lang="es" class="bg-slate-50"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", null, { "client:only": true, "userType": userType, "client:component-hydration": "only", "client:component-path": "C:/Documentos/proyects/GuiaTEC/src/components/Header.tsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Documentos/proyects/GuiaTEC/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro("https://xouleater.github.io");
const $$Main = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Gu\xEDaTEC", "userType": "asistente" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="">Main</h1> ` })}`;
}, "C:/Documentos/proyects/GuiaTEC/src/pages/main.astro", void 0);

const $$file = "C:/Documentos/proyects/GuiaTEC/src/pages/main.astro";
const $$url = "/GuiaTEC/main";

export { $$Main as default, $$file as file, $$url as url };
