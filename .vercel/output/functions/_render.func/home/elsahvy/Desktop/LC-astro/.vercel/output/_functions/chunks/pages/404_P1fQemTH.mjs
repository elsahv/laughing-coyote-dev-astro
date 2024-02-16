/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderComponent, g as renderSlot, h as renderHead } from '../astro_vlHRU2XH.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$3 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about-section" },
    { label: "Websites", href: "/#websites-section" },
    { label: "Packages", href: "/#packages-section" },
    { label: "Contact", href: "/#contact-section" }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="border-teal border-b-2 bg-black opacity-80 text-parchment w-[100%] pt-4"> <nav class="pl-5 pr-5 pt-1 h-[100%] grid grid-cols-2 pb-3"> <div class="flex justify-start items-end py-3 pl-1"> <div id="logo" class="text-4xl font-bold"> <a href="/">Laughing Coyote Dev</a> </div> </div> <ul class="flex justify-end items-end text-3xl py-3"> ${links.map((link) => renderTemplate`<a class="mx-5"${addAttribute(link.href, "href")}> <li>${link.label}</li> </a>`)} </ul> </nav> </header>`;
}, "/home/elsahvy/Desktop/LC-astro/src/components/Header.astro", void 0);

const $$Astro$2 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Footer;
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-teal relative bottom-0 left-0 text-center w-full border-t-2 border-black"> <div>made by Elsa Hovey</div> <div class="">
Copyright &copy; ${today.getFullYear()} </div> </footer>`;
}, "/home/elsahvy/Desktop/LC-astro/src/components/Footer.astro", void 0);

const SITE_TITLE = "Laughing Coyote Dev";
const SITE_DESCRIPTION = "Web Development and Design";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title = "Articles, Stores & Tutorials for Tech People" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"', '><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.js" integrity="sha512-BJ/5sR2hFxQTKin/55JQCcMTObShDBAmVjL/3NR/MVcrhyOazJjAgvROem03+HYyGw16SVdSfoWCFGr9syxAKA==" crossorigin="anonymous" referrerpolicy="no-referrer"><\/script><title>', " - ", "</title>", '</head> <body class="bg-parchment"> ', " ", " ", " </body></html>"])), addAttribute(SITE_DESCRIPTION, "content"), SITE_TITLE, title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/home/elsahvy/Desktop/LC-astro/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "404 - Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-items-center gap-7"> <h1 class="text-5xl">Page Not Found</h1> <p class="text-2xl mb-10">
Sorry, we couldn't find the page you were looking for.
</p> <a href="/" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white">Go Back Home</a> </div> ` })}`;
}, "/home/elsahvy/Desktop/LC-astro/src/pages/404.astro", void 0);

const $$file = "/home/elsahvy/Desktop/LC-astro/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MainLayout as $, _404 as _ };
