/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_ClVTVin5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './_id__GjHtCUUV.mjs';

const $$Astro = createAstro();
const $$NewActivity = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewActivity;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Creador de Actividades", "currentRoute": "equipo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 grid h-screen pt-24 -z-10 lgn:pt-12 place-items-center"> ${renderComponent($$result2, "ActivityForm", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/ActivityForm.tsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/new-activity.astro", void 0);

const $$file = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/new-activity.astro";
const $$url = "/new-activity";

export { $$NewActivity as default, $$file as file, $$url as url };
