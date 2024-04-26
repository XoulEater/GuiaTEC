/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_ClVTVin5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './_id__GjHtCUUV.mjs';

const $$Astro = createAstro();
const $$Students = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Students;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Gu\xEDaTEC", "currentRoute": "estudiantes" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="flex justify-between mx-20 my-6"> <h1 class="text-3xl font-bold">Estudiantes</h1> </header> <div class="mb-10"> ${renderComponent($$result2, "StudentTable", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/StudentTable.tsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/students.astro", void 0);

const $$file = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/students.astro";
const $$url = "/students";

export { $$Students as default, $$file as file, $$url as url };
