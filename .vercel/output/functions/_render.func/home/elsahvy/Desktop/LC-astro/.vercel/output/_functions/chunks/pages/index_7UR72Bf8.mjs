/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, f as renderComponent, l as Fragment } from '../astro_vlHRU2XH.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from './404_X1XBbYla.mjs';
import { $ as $$Image } from './generic_uPrcRsqo.mjs';
/* empty css                          */

const $$Astro$2 = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Contact;
  return renderTemplate`<!-- import ContactForm from "../ContactForm"; --><!--//todo: SELLING CTA COMP-->${maybeRenderHead()}<section id="contact-section" class=""> <div class="px-5 md:px-10"> <div class="mx-auto w-full max-w-7xl"> <div class="py-16 md:py-24 lg:py-32"> <div class="grid items-center max-[991px]:justify-items-start grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-20"> <div class="border-black rounded max-[991px]:max-w-[720px]"> <div class="p-5"> <h2 class="font-bold mb-2 text-3xl md:text-5xl">
Contact
</h2> <div class="ml-0 mr-0 mt-4 max-w-[528px]"> <p class="max-[479px] text-lg">Lets work together!</p> </div> <div class="mb-8 max-w-[480px] text-lg"> <p class="max-[479px]:text-sm">
Looking forward to hearing from you!
</p> </div> </div> </div> ${renderComponent($$result, "Fragment", Fragment, {}, {})} </div> </div> </div> </div> </section>`;
}, "/home/elsahvy/Desktop/LC-astro/src/components/sections/Contact.astro", void 0);

const Img1 = new Proxy({"src":"/_astro/hoveyroofing.ANkwSKWm.png","width":1897,"height":935,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/elsahvy/Desktop/LC-astro/public/screenshots/hoveyroofing.png";
							}
							
							return target[name];
						}
					});

const Img2 = new Proxy({"src":"/_astro/fish-expo-demo.c4vNfRzF.png","width":1912,"height":884,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/elsahvy/Desktop/LC-astro/public/screenshots/designs/fish-expo-demo.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro();
const $$Works = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Works;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-maqz3d7x": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<section id="works-wrapper" class="flex justify-center items-center orange h-screen mt-[105px]" data-astro-cid-maqz3d7x><div id="container" class="" data-astro-cid-maqz3d7x><!-- todo: COME BACK TO v --><!-- <div id="dynamic-grid">
    {
      websites.map((item) => (
        <div class="flex">
          <h2>{item.title}</h2>
        </div>
      ))
    }
  </div> --><!-- todo: COME BACK TO ^ --><div class="bg-test2 w-1/2 ml-[50px] mt-[150px] pb-5 p-5" data-astro-cid-maqz3d7x><h2 class="text-5xl underline font-bold" data-astro-cid-maqz3d7x>Featured Works</h2><p class="pt-5" data-astro-cid-maqz3d7x>
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum quo
          atque fuga. Corporis doloremque sit minus, asperiores quia velit
          inventore nostrum! Dicta alias corporis numquam.
</p></div><!-- GRID v --><div id="grid" class="gridTemplateAreas test2 p-[50px] mt-[50px]" data-astro-cid-maqz3d7x><!-- *SQ-1 --><div id="sq-1" class="test1 pl-1" data-astro-cid-maqz3d7x><div id="content-container" data-astro-cid-maqz3d7x><h2 class="text-black font-bold 2xl:text-4xl sm:text-5xl 2xl:my-5 lg:mt-5 sm:mt-[50px]" data-astro-cid-maqz3d7x>
HoveyRoofing
</h2><p class="" data-astro-cid-maqz3d7x>
1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              maiores cupiditate non illum, ducimus ad vero repellendus
              accusamus iure quod? Praesentium vel, non vero ex optio recusandae
              nulla maxime dolorum!
</p><div id="btn-wrapper" class="flex gap-4" data-astro-cid-maqz3d7x><button class="bg-teal text-white p-2 my-5 drop-shadow-lg" data-astro-cid-maqz3d7x><a href="" data-astro-cid-maqz3d7x>Here's a button!</a></button><button class="bg-orange text-white p-2 my-5 drop-shadow-lg" data-astro-cid-maqz3d7x><a href="" data-astro-cid-maqz3d7x>Here's another button!</a></button></div></div></div><!-- *SQ-2 --><div id="sq-2" class="lavender" data-astro-cid-maqz3d7x>${renderComponent($$result2, "Image", $$Image, { "src": Img1, "alt": "", "class": "h-full border border-black", "data-astro-cid-maqz3d7x": true })}</div><!-- *SQ-3 --><div id="sq-3" class="pt-[150px]" data-astro-cid-maqz3d7x>${renderComponent($$result2, "Image", $$Image, { "src": Img2, "alt": "", "class": "h-full border border-black", "data-astro-cid-maqz3d7x": true })}</div><!-- *SQ-4 --><div id="sq-4" class="teal pl-1 pt-[150px]" data-astro-cid-maqz3d7x><div id="content-container" data-astro-cid-maqz3d7x><h2 class="text-black font-bold 2xl:text-4xl sm:text-5xl 2xl:my-5 lg:mt-5 sm:mt-[50px]" data-astro-cid-maqz3d7x>
Generations Backflow
</h2><p class="" data-astro-cid-maqz3d7x>
1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              maiores cupiditate non illum, ducimus ad vero repellendus
              accusamus iure quod? Praesentium vel, non vero ex optio recusandae
              nulla maxime dolorum!
</p><div class="flex gap-4" data-astro-cid-maqz3d7x><button id="btn-wrapper" class="bg-teal text-white p-2 my-5 drop-shadow-lg" data-astro-cid-maqz3d7x><a href="" data-astro-cid-maqz3d7x>Here's a button!</a></button><button class="bg-orange text-white p-2 my-5 drop-shadow-lg" data-astro-cid-maqz3d7x><a href="" data-astro-cid-maqz3d7x>Here's another button!</a></button></div></div></div></div><!-- GRID  ^  --></div></section>` })}`;
}, "/home/elsahvy/Desktop/LC-astro/src/components/sections/Works.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate`    ${renderComponent($$result2, "Works", $$Works, {})} ${renderComponent($$result2, "Contact", $$Contact, {})}   ` })}`;
}, "/home/elsahvy/Desktop/LC-astro/src/pages/index.astro", void 0);

const $$file = "/home/elsahvy/Desktop/LC-astro/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
