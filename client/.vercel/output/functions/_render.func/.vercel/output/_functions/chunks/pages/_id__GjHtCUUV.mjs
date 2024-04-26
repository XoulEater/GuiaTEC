/* empty css                              */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderHead, g as renderComponent, h as renderSlot, m as maybeRenderHead } from '../astro_ClVTVin5.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                              */

const $$Astro$2 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title, currentRoute } = Astro2.props;
  return renderTemplate`<html lang="es" class="bg-slate-50"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", null, { "client:only": true, "currentRoute": currentRoute, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/NavBar.tsx", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/layouts/MainLayout.astro", void 0);

var ActivityType = /* @__PURE__ */ ((ActivityType2) => {
  ActivityType2["ORIENTADORA"] = "Orientadora";
  ActivityType2["MOTIVACIONAL"] = "Motivacional";
  ActivityType2["APOYO"] = "Apoyo";
  ActivityType2["TECNICA"] = "Técnica";
  ActivityType2["RECREATIVA"] = "Recreativa";
  return ActivityType2;
})(ActivityType || {});
var ActivityStatus = /* @__PURE__ */ ((ActivityStatus2) => {
  ActivityStatus2["PLANEADA"] = "Planeada";
  ActivityStatus2["PUBLICADA"] = "Publicada";
  ActivityStatus2["NOTIFICADA"] = "Notificada";
  ActivityStatus2["REALIZADA"] = "Realizada";
  ActivityStatus2["CANCELADA"] = "Cancelada";
  return ActivityStatus2;
})(ActivityStatus || {});
var Modalities = /* @__PURE__ */ ((Modalities2) => {
  Modalities2["PRESENCIAL"] = "Presencial";
  Modalities2["VIRTUAL"] = "Virtual";
  return Modalities2;
})(Modalities || {});
var Campus = /* @__PURE__ */ ((Campus2) => {
  Campus2["CA"] = "CA";
  Campus2["AL"] = "AL";
  Campus2["SJ"] = "SJ";
  Campus2["SC"] = "SC";
  Campus2["LI"] = "LI";
  return Campus2;
})(Campus || {});
const teachers = [
  {
    id: "CA-01",
    name: "Teacher 10",
    email: "email1",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo: "https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg?cs=srgb&dl=pexels-maur%C3%ADcio-mascaro-801863.jpg&fm=jpg",
    campus: "CA" /* CA */,
    isLeader: true,
    password: "12345",
    userType: "teacher"
  },
  {
    id: "AL-02",
    name: "Teacher 2",
    email: "email2",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo: "https://images.inc.com/uploaded_files/image/1920x1080/getty_499517325_111832.jpg",
    campus: "AL" /* AL */,
    isLeader: false,
    password: "12345",
    userType: "teacher"
  },
  {
    id: "SJ-03",
    name: "Teacher 3",
    email: "email3",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?cs=srgb&dl=pexels-ron-lach-1181357.jpg&fm=jpg",
    campus: "SJ" /* SJ */,
    isLeader: false,
    password: "12345",
    userType: "teacher"
  },
  {
    id: "SC-04",
    name: "Teacher 4",
    email: "email4",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?cs=srgb&dl=pexels-ron-lach-1181357.jpg&fm=jpg",
    campus: "SC" /* SC */,
    isLeader: false,
    password: "12345",
    userType: "teacher"
  },
  {
    id: "LI-05",
    name: "Teacher 5",
    email: "email5",
    officePNumber: "123456",
    personalPNumber: "123456",
    photo: "https://images.pexels.com/photos/1181357/pexels-photo-1181357.jpeg?cs=srgb&dl=pexels-ron-lach-1181357.jpg&fm=jpg",
    campus: "LI" /* LI */,
    isLeader: false,
    password: "12345",
    userType: "teacher"
  }
];
const activities = [];
for (let i = 1; i <= 30; i++) {
  const activity1 = {
    id: i.toString(),
    name: `Activity ${i}`,
    week: Math.floor(Math.random() * 16) + 1,
    date: /* @__PURE__ */ new Date(),
    publicationDate: /* @__PURE__ */ new Date(),
    reminderInterval: 15,
    responsibles: teachers.slice(0, 2),
    type: Object.values(ActivityType)[Math.floor(Math.random() * Object.keys(ActivityType).length / 2)],
    modality: Object.values(Modalities)[Math.floor(Math.random() * Object.keys(Modalities).length / 2)],
    status: Object.values(ActivityStatus)[Math.floor(Math.random() * Object.keys(ActivityStatus).length / 1)],
    link: "https://www.google.com",
    attachmentFile: "https://www.google.com"
  };
  activities.push(activity1);
}
activities.sort((a, b) => a.week - b.week);
const workPlans = [
  {
    id: "1",
    name: "Work Plan 1",
    description: "Description 1",
    activities
  },
  {
    id: "2",
    name: "Work Plan 2",
    description: "Description 2",
    activities
  },
  {
    id: "3",
    name: "Work Plan 3",
    description: "Description 3",
    activities
  },
  {
    id: "4",
    name: "Work Plan 4",
    description: "Description 4",
    activities
  }
];

const $$Astro$1 = createAstro();
const $$id$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$id$1;
  const { id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Gu\xEDaTEC", "currentRoute": "profesores" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 grid h-screen pt-24 -z-10 lgn:pt-12 place-items-center"> ${renderComponent($$result2, "TeacherCard", null, { "teacherID": id ?? "", "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/TeacherCard.tsx", "client:component-export": "default" })} </div> ` })}`;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/teacher/[id].astro", void 0);

const $$file$1 = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/teacher/[id].astro";
const $$url$1 = "/teacher/[id]";

const _id_$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const workPlan = workPlans.find((workPlan2) => workPlan2.id === id);
  return renderTemplate`${renderComponent($$result, "Layout", $$MainLayout, { "title": "Gu\xEDaTEC", "currentRoute": "equipo" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WorkPlan", null, { "workplanDTO": workPlan, "client:only": true, "client:component-hydration": "only", "client:component-path": "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/components/WorkPlan.tsx", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/workplan/[id].astro", void 0);

const $$file = "C:/Users/ncque/Downloads/tec/ds/proyect/xouleater.github.io/client/src/pages/workplan/[id].astro";
const $$url = "/workplan/[id]";

const _id_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, Campus as C, _id_$1 as _, activities as a, _id_ as b };
