/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_ClVTVin5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { a as activities, $ as $$MainLayout } from './_id__GjHtCUUV.mjs';

const $$Astro = createAstro();
const $$Editid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Editid;
  const { id } = Astro2.params;
  const activity = activities.find((activity2) => activity2.id === id);
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Editar Actividad", "currentRoute": "equipo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 grid h-screen pt-24 -z-10 lgn:pt-12 place-items-center"> ${renderComponent($$result2, "ActivityForm", null, { "client:only": true, "activity": activity, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/ActivityForm", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/activity/edit-[id].astro", void 0);

const $$file = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/activity/edit-[id].astro";
const $$url = "/activity/edit-[id]";

export { $$Editid as default, $$file as file, $$url as url };
