import{j as t}from"./jsx-runtime.DSYUAlOe.js";import{r as i}from"./index.DdRMN4IK.js";const w=({title:s,formType:e,placeHolderLG:r,placeHolderSM:o,logo:l})=>{const[d,a]=i.useState(window.innerWidth);i.useEffect(()=>{const n=()=>{a(window.innerWidth)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}},[]);const c=d>=1050?r:o;return t.jsxs("div",{className:"flex flex-col",children:[t.jsx("label",{htmlFor:e,className:" text-zinc-700 hidden lgn:block",children:s}),t.jsxs("div",{className:"flex relative items-center flex-row",children:[t.jsx("img",{src:l,alt:e,className:"absolute left-2 w-7 "}),t.jsx("input",{className:"w-full text-zinc-500 py-3 pl-11 border border-zinc-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-light focus:border-zinc-500 transition-all duration-300 ease-in-out",id:e,type:e,name:e,placeholder:c,required:!0})]})]})};export{w as default};
