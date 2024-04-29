/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_ClVTVin5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './_id__GjHtCUUV.mjs';

const $$Astro = createAstro();
const $$Teachers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Teachers;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Gu\xEDaTEC", "currentRoute": "profesores" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<header class="flex justify-between mx-20 my-6"> <h1 class="text-3xl font-bold">Profesores</h1> ${renderComponent($$result2, "RegisterTeacher", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/RegisterTeacher.tsx", "client:component-export": "default" })} </header> <div class="grid place-items-center"> ${renderComponent($$result2, "TeachersTable", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/TeachersTable.tsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/teachers.astro", void 0);

const $$file = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/teachers.astro";
const $$url = "/teachers";

export { $$Teachers as default, $$file as file, $$url as url };
