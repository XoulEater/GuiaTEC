/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, m as maybeRenderHead } from '../astro_ClVTVin5.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$SubmitButton, a as $$LoginLayout } from './forgot-password_DGx9WBT6.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$LoginLayout, { "title": "Bienvenido !", "subtitle": "Ingrese sus datos" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col w-5/6 gap-5 lgn:w-5/6 mt-7"> <form class="flex flex-col gap-5"> ${renderComponent($$result2, "Input", null, { "title": "Correo", "formType": "email", "placeHolderLG": "Ingrese su correo", "placeHolderSM": "Correo", "logo": "/email.svg", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/Input.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Input", null, { "title": "Contrase\xF1a", "formType": "password", "placeHolderLG": "Ingrese su contrase\xF1a", "placeHolderSM": "Contrase\xF1a", "logo": "/password.svg", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/Input.tsx", "client:component-export": "default" })} <div class="flex justify-between w-full"> <div> <input type="checkbox" name="remember"> <label for="remember" class="text-sm text-zinc-700">Recuérdame</label> </div> <a href="/forgot-password" class="text-sm text-zinc-500">Olvidó su contraseña?</a> </div> ${renderComponent($$result2, "SubmitButton", $$SubmitButton, { "text": "Ingresar" })} </form> </div> <h2 class="mt-6">
No tienes cuenta? <a href="/register" target="_blank" class="text-primary-light">Regístrate</a> </h2> ` })} `;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/index.astro", void 0);

const $$file = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
