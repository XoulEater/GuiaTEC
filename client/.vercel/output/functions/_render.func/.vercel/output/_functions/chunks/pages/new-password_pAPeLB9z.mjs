/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_ClVTVin5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$SubmitButton, a as $$LoginLayout } from './forgot-password_DGx9WBT6.mjs';

const $$Astro = createAstro();
const $$NewPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewPassword;
  return renderTemplate`${renderComponent($$result, "Layout", $$LoginLayout, { "title": "Nueva contrase\xF1a", "subtitle": "Cree una nueva contrase\xF1a" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-5/6 gap-5 lgn:w-5/6 mt-7"> <form autocomplete="off" class="flex flex-col gap-5"> ${renderComponent($$result2, "Input", null, { "title": "Nueva contrase\xF1a", "formType": "password", "placeHolderLG": "Ingrese su nueva contrase\xF1a", "placeHolderSM": "Nueva contrase\xF1a", "logo": "/password.svg", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/Input.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Input", null, { "title": "Confirmar contrase\xF1a", "formType": "password", "placeHolderLG": "Confirme su nueva contrase\xF1a", "placeHolderSM": "Confirmar contrase\xF1a", "logo": "/password.svg", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/Input.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "SubmitButton", $$SubmitButton, { "text": "Validar" })} </form> </div> ` })} `;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/new-password.astro", void 0);

const $$file = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/new-password.astro";
const $$url = "/new-password";

export { $$NewPassword as default, $$file as file, $$url as url };
