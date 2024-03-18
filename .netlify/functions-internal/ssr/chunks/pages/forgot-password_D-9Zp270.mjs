/* empty css                                    */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderSlot, m as maybeRenderHead, h as renderComponent } from '../astro_BwF39fxP.mjs';
/* empty css                                    */

const $$Astro$2 = createAstro("https://xouleater.github.io");
const $$LoginLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LoginLayout;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`<html lang="es" class="bg-slate-50"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="grid h-screen place-items-center"> <div class="h-[90%] lgn:h-5/6 w-[95%] lgn:w-9/12 rounded-3xl flex flex-row bg-slate-200 overflow-hidden"> <aside class="bg-primary-dark h-full w-5/12 place-items-center hidden lgn:grid"> <h1 class="text-white text-7xl font-semibold">GuíaTEC</h1> </aside> <div class="h-full w-full lgn:w-7/12 flex-col flex items-center place-content-center"> <svg width="100" height="100" viewBox="0 0 185 185" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M66.9854 174.208C68.5271 168.967 70.0688 163.648 71.6104 158.406C74.6938 147.769 77.7771 137.131 80.9375 126.571C81.3229 125.26 81.0146 124.798 79.7813 124.335C72.2271 121.715 66.4458 116.935 62.2833 110.152C61.975 109.613 61.6667 109.15 61.3583 108.533C62.9 107.685 64.2875 106.915 65.9063 105.99C66.2917 106.529 66.6 106.992 66.8313 107.531C70.2229 113.081 75.0021 117.013 81.1688 119.325C82.4021 119.788 82.8646 119.556 83.25 118.246C84.6375 113.081 86.1792 107.917 87.5667 102.752C88.3375 99.9771 88.9542 97.125 89.8021 94.35C90.0333 93.5021 89.8021 93.1167 89.1083 92.8854C88.6458 92.7313 88.1833 92.5 87.7208 92.4229C81.7083 90.7271 75.6958 89.0313 69.7604 87.3354C53.3417 82.6333 36.8458 77.9313 20.4271 73.1521C19.7333 72.9208 19.1938 72.7667 18.5771 72.5354C18.5771 72.3813 18.6542 72.3042 18.6542 72.15C33.2229 74 47.7917 75.85 62.3604 77.7C62.4375 77.5458 62.4375 77.4688 62.5146 77.3146C56.1167 74 49.7188 70.7625 42.9354 67.2938C45.1708 64.1333 47.0979 61.05 49.4104 58.275C58.9688 47.175 70.8396 40.3146 85.4854 38.7729C88.8771 38.3875 92.3458 38.85 95.8146 38.9271C96.8167 38.9271 97.2021 39.4667 97.2792 40.4688C97.8188 45.9417 98.5125 51.4146 99.1292 56.8875C99.2063 57.4271 99.2833 57.8896 99.7458 58.5063C104.217 42.55 108.688 26.5938 113.158 10.6375C113.235 10.6375 113.39 10.7146 113.467 10.7146C113.158 13.4125 112.85 16.0333 112.465 18.7313C111.54 25.9771 110.692 33.3 109.767 40.5458C109.613 41.7792 109.921 42.3958 111.077 42.8583C129.577 51.0292 140.446 65.2125 143.683 85.1C144.223 88.5688 143.992 92.1917 144.146 95.8146C144.223 97.0479 143.683 97.6646 142.45 97.8958C136.129 99.1292 129.885 100.517 123.565 101.827C123.41 101.827 123.256 101.827 123.025 101.75C123.025 101.442 122.948 101.133 123.025 100.902C124.335 94.1958 124.335 87.4896 121.869 81.0146C121.483 80.0125 122.023 79.7042 122.64 79.2417C125.954 76.6979 129.269 74.1542 132.583 71.6104C132.969 71.3021 133.277 70.9938 133.585 70.3771C132.969 70.4542 132.275 70.6083 131.658 70.6854C127.65 71.6875 123.565 72.4583 119.479 73.3833C118.631 73.5375 118.092 73.3833 117.475 72.6125C108.225 60.8958 94.35 56.6563 80.0896 61.05C79.7042 61.2042 79.3188 61.2042 78.9333 61.4354C76.6979 62.9 75.3104 61.7438 73.8458 59.9708C71.4563 57.1958 68.9125 54.575 66.4458 51.9542C66.1375 51.6458 65.7521 51.4146 65.4438 51.1063C65.3667 51.1833 65.2125 51.1833 65.1354 51.2604C67.3708 58.4292 69.6063 65.5979 71.9188 72.9979C72.5354 72.6896 72.9979 72.4583 73.4604 72.2271C78.8563 68.8354 84.7146 66.6 91.1896 66.6771C101.827 66.7542 111.154 73.2292 115.008 83.1729C116.781 87.6438 117.321 92.2688 116.55 96.8938C114.854 106.452 109.998 113.621 100.825 117.475C99.7458 117.938 98.6667 118.4 97.2792 118.94C101.519 125.338 105.681 131.504 109.844 137.671C109.998 137.594 110.075 137.594 110.229 137.517C110.152 137.054 110.152 136.515 110.075 136.052C109.458 131.89 108.919 127.65 108.225 123.488C108.071 122.408 108.302 121.715 109.304 121.098C115.394 117.013 119.556 111.385 122.023 104.525C122.254 103.831 122.485 103.138 122.794 102.29C137.44 106.144 151.931 109.998 166.423 113.852C166.423 113.929 166.423 114.083 166.346 114.16C163.571 113.852 160.796 113.544 158.098 113.158C152.856 112.465 147.692 111.694 142.45 110.923C141.294 110.769 140.908 111.231 140.523 112.156C133.971 128.035 122.485 138.673 106.144 143.838C98.5125 146.304 90.65 146.921 82.7104 145.456C81.4 145.225 80.7063 145.533 80.1667 146.767C76.2354 155.323 72.15 163.879 68.1417 172.435C67.8333 173.052 67.525 173.669 67.2167 174.208C67.0625 174.285 66.9854 174.208 66.9854 174.208Z" fill="#3064D4"></path> </svg> <h1 class="text-4xl font-">${title}</h1> <h2 class="text-xl text-zinc-500">${subtitle}</h2> ${renderSlot($$result, $$slots["default"])} </div> </div> </body></html>`;
}, "C:/Documentos/proyects/GuiaTEC/src/layouts/LoginLayout.astro", void 0);

const $$Astro$1 = createAstro("https://xouleater.github.io");
const $$SubmitButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SubmitButton;
  const { text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="submit" class="bg-primary-dark text-white text-lg py-1 rounded-lg flex items-center justify-center w-full hover:bg-primary-light transition duration-300 ease-in-out group"> <label class="group-hover:transform group-hover:scale-110 transition duration-300 ease-in-out">${text}</label> <img src="/arrow-right.svg" alt="arrow-right" class="ml-2 group-hover:transform group-hover:translate-x-1 group-hover:scale-110 transition duration-300 ease-in-out"> </button>`;
}, "C:/Documentos/proyects/GuiaTEC/src/components/SubmitButton.astro", void 0);

const $$Astro = createAstro("https://xouleater.github.io");
const $$ForgotPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ForgotPassword;
  return renderTemplate`${renderComponent($$result, "Layout", $$LoginLayout, { "title": "Olvid\xF3 su contrase\xF1a", "subtitle": "Vamos a reiniciar su contrase\xF1a " }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="w-5/6 lgn:w-5/6 mt-7 flex flex-col gap-5"> <form action="/validate-email" method="post" class="flex flex-col gap-5"> ${renderComponent($$result2, "Input", null, { "title": "Correo", "formType": "email", "placeHolderLG": "Ingrese su correo", "placeHolderSM": "Correo", "logo": "/email.svg", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Documentos/proyects/GuiaTEC/src/components/Input.tsx", "client:component-export": "default" })} <a href="/" class="text-zinc-500">Volver al login</a> ${renderComponent($$result2, "SubmitButton", $$SubmitButton, { "text": "Enviar" })} </form> </div> <h2 class="mt-6">
No tienes cuenta? <a href="/register" class="text-primary-light">Regístrate</a> </h2> ` })}`;
}, "C:/Documentos/proyects/GuiaTEC/src/pages/forgot-password.astro", void 0);

const $$file = "C:/Documentos/proyects/GuiaTEC/src/pages/forgot-password.astro";
const $$url = "/GuiaTEC/forgot-password";

const forgotPassword = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ForgotPassword,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$SubmitButton as $, $$LoginLayout as a, forgotPassword as f };