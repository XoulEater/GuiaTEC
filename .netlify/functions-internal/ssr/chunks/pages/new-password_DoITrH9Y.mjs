/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, h as renderComponent, m as maybeRenderHead } from '../astro_BwF39fxP.mjs';
import { $ as $$SubmitButton, a as $$LoginLayout } from './forgot-password_D-9Zp270.mjs';

const $$Astro = createAstro("https://xouleater.github.io");
const $$NewPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NewPassword;
  return renderTemplate`${renderComponent($$result, "Layout", $$LoginLayout, { "title": "Nueva contrase\xF1a", "subtitle": "Cree una nueva contrase\xF1a" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-5/6 lgn:w-5/6 mt-7 flex flex-col gap-5"> <form action="/" method="post" autocomplete="off" class="flex flex-col gap-5"> ${renderComponent($$result2, "Input", null, { "title": "Nueva contrase\xF1a", "formType": "password", "placeHolderLG": "Ingrese su nueva contrase\xF1a", "placeHolderSM": "Nueva contrase\xF1a", "logo": "/password.svg", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Documentos/proyects/GuiaTEC/src/components/Input.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "Input", null, { "title": "Confirmar contrase\xF1a", "formType": "password", "placeHolderLG": "Confirme su nueva contrase\xF1a", "placeHolderSM": "Confirmar contrase\xF1a", "logo": "/password.svg", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Documentos/proyects/GuiaTEC/src/components/Input.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "SubmitButton", $$SubmitButton, { "text": "Validar" })} </form> </div> ` })}`;
}, "C:/Documentos/proyects/GuiaTEC/src/pages/new-password.astro", void 0);

const $$file = "C:/Documentos/proyects/GuiaTEC/src/pages/new-password.astro";
const $$url = "/GuiaTEC/new-password";

export { $$NewPassword as default, $$file as file, $$url as url };
