/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_Cr4KhBQ3.mjs';
import { $ as $$SubmitButton, a as $$LoginLayout } from './forgot-password_DvbaPeBB.mjs';

const $$Astro = createAstro("https://xouleater.github.io");
const $$ValidateEmail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ValidateEmail;
  return renderTemplate`${renderComponent($$result, "Layout", $$LoginLayout, { "title": "Verificaci\xF3n", "subtitle": "Ingrese el c\xF3digo que recibi\xF3 en su correo" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-5/6 lgn:w-5/6 mt-7 flex flex-col gap-5"> <form action="/new-password" method="post" autocomplete="off" class="flex flex-col gap-5"> ${renderComponent($$result2, "Input", null, { "title": "C\xF3digo de verificaci\xF3n", "formType": "text", "placeHolderLG": "Ingrese el c\xF3digo  de verificaci\xF3n", "placeHolderSM": "C\xF3digo de verificaci\xF3n", "logo": "/code.svg", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Documentos/proyects/GuiaTEC/src/components/Input.tsx", "client:component-export": "default" })} <a href="/" class="text-zinc-500">Volver al login</a> ${renderComponent($$result2, "SubmitButton", $$SubmitButton, { "text": "Validar" })} </form> </div> <h2 class="mt-6">
No tienes cuenta? <a href="/register" class="text-primary-light">Regístrate</a> </h2> ` })}`;
}, "C:/Documentos/proyects/GuiaTEC/src/pages/validate-email.astro", void 0);

const $$file = "C:/Documentos/proyects/GuiaTEC/src/pages/validate-email.astro";
const $$url = "/GuiaTEC/validate-email";

export { $$ValidateEmail as default, $$file as file, $$url as url };
