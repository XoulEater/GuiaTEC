/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_ClVTVin5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$SubmitButton, a as $$LoginLayout } from './forgot-password_DGx9WBT6.mjs';

const $$Astro = createAstro();
const $$ValidateEmail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ValidateEmail;
  return renderTemplate`${renderComponent($$result, "Layout", $$LoginLayout, { "title": "Verificaci\xF3n", "subtitle": "Ingrese el c\xF3digo que recibi\xF3 en su correo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-5/6 gap-5 lgn:w-5/6 mt-7"> <form autocomplete="off" class="flex flex-col gap-5"> ${renderComponent($$result2, "Input", null, { "title": "C\xF3digo de verificaci\xF3n", "formType": "text", "placeHolderLG": "Ingrese el c\xF3digo de verificaci\xF3n", "placeHolderSM": "C\xF3digo de verificaci\xF3n", "logo": "/code.svg", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/Input.tsx", "client:component-export": "default" })} <a href="/" class="text-zinc-500">Volver al login</a> ${renderComponent($$result2, "SubmitButton", $$SubmitButton, { "text": "Validar" })} </form> </div> <h2 class="mt-6">
No tienes cuenta? <a href="/register" class="text-primary-light">Regístrate</a> </h2> ` })} `;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/validate-email.astro", void 0);

const $$file = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/validate-email.astro";
const $$url = "/validate-email";

export { $$ValidateEmail as default, $$file as file, $$url as url };
