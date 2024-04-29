/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_ClVTVin5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$MainLayout } from './_id__GjHtCUUV.mjs';

const $$Astro = createAstro();
const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Team;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Gu\xEDaTEC", "currentRoute": "equipo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TeamDisplay", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/TeamDisplay.tsx", "client:component-export": "default" })} ` })} `;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/team.astro", void 0);

const $$file = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/team.astro";
const $$url = "/team";

export { $$Team as default, $$file as file, $$url as url };
