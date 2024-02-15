/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderSlot, f as renderComponent, u as unescapeHTML } from '../astro_vlHRU2XH.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="" class="text-onyx"> <div id="back-btn-wrapper" class="pl-[72px] ml-0 pt-5 text-lg bg-munsell"> <a href="/" class="underline hover:text-white"> ${"<---"} back to home
</a> </div> <div id="post-header-grid" class="grid 2xl:grid-cols-2 grid-cols-1 bg-munsell drop-shadow-xl"> <div id="left-sq" class="flex items-center 2xl:justify-center"> <div class="2xl:pr-5 ml-2 py-2 px-5 my-[50px] w-3/4"> <h1 class="md:text-5xl text-3xl pb-2 mt-1 text-onyx"> ${frontmatter.title} </h1> <p class="md:text-2xl pl-1 pt-1 pr-3 text-onyx opacity-75"> ${frontmatter.description} </p> </div> </div> <div id="left-sq" class="flex items-center bg-onyx border border-rosyBrown dropshadow-2xl rounded-tl-2xl"> <a${addAttribute(frontmatter.websiteUrl, "href")}> <img${addAttribute(frontmatter.image.url, "src")}${addAttribute(frontmatter.image.alt, "alt")} class="rounded-tl-2xl"> </a> </div> </div> <div id="body-content" class="text-munsel mt-[45px] 2xl:ml-[450px] lg:ml-[250px] ml-5 mr-[50px] mb-[55px] text-black"> <p class="text-2xl font-bold">${frontmatter.pubDate.slice(0, 10)}</p> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/elsahvy/Desktop/LC-astro/src/layouts/MarkdownPostLayout.astro", void 0);

const html = "<!--\n# My First Blog Post\n\nPublished on: 2022-07-01\n\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\n -->\n<h1 id=\"telling-the-story-of-a-website-involves-highlighting-its-inception-purpose-evolution-and-impact-heres-how-you-could-go-about-it\">Telling the story of a website involves <em>highlighting</em> its <strong>inception, purpose, evolution, and impact</strong>. Here’s how you could go about it:</h1>\n<p><strong>Introduction</strong>: Begin by introducing the website and its primary purpose or mission. This sets the stage for the story you’re about to tell.</p>\n<p><strong>Inception</strong>: Share the backstory of how the website came into existence. This could include the inspiration behind its creation, the individuals or team involved, and any challenges or obstacles they faced in bringing it to life.</p>\n<p><strong>Purpose</strong>: Clearly articulate the purpose or goals of the website. What problem or need does it address? How does it aim to make a difference in its users’ lives or in the broader context of its industry or community?</p>\n<p><strong>Evolution</strong>: Describe how the website has evolved over time. This could include updates to its design, functionality, or content, as well as any major milestones or achievements it has reached along the way.</p>\n<p><strong>Impact</strong>: Highlight the impact the website has had on its users, community, or industry. Share testimonials, success stories, or metrics that demonstrate its effectiveness in fulfilling its purpose and achieving its goals.</p>\n<p><strong>Unique Features</strong>: Discuss any unique or innovative features that set the website apart from others in its niche. What makes it stand out, and how has it contributed to its success?</p>\n<p><strong>User Experience</strong>: Talk about the user experience the website provides. How does its design, navigation, and functionality enhance the overall experience for visitors? What steps has the team taken to ensure a positive and seamless user experience?</p>\n<p><strong>Community and Engagement</strong>: If applicable, discuss the website’s community and how it fosters engagement among its users. This could include features like forums, user-generated content, or social media integration.</p>\n<p><strong>Future Outlook</strong>: Conclude by sharing the website’s vision for the future. What are its goals and aspirations moving forward? How does it plan to continue evolving and making an impact in the years to come?</p>\n<p>By weaving these elements together, you can effectively <em>tell the story of a website, providing insight into its journey, purpose, and significance</em>.</p>";

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"The Running Quail","pubDate":"2022-07-01T00:00:00.000Z","description":"a future Morongo Basin community website","author":"Astro Learner","image":{"url":"https://images.pexels.com/photos/66997/pexels-photo-66997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","alt":"The full Astro logo."},"websiteUrl":"","githubUrl":"https://github.com/elsahv/-the-running-quail","tags":["astro","blogging","learning in public"]};
				const file = "/home/elsahvy/Desktop/LC-astro/src/pages/websites/generations-backflow.md";
				const url = "/websites/generations-backflow";
				function rawContent() {
					return "\n<!--\n# My First Blog Post\n\nPublished on: 2022-07-01\n\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\n\n## What I've accomplished\n\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\n\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\n\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\n\n## What's next\n\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\n -->\n\n# Telling the story of a website involves _highlighting_ its **inception, purpose, evolution, and impact**. Here's how you could go about it:\n\n**Introduction**: Begin by introducing the website and its primary purpose or mission. This sets the stage for the story you're about to tell.\n\n**Inception**: Share the backstory of how the website came into existence. This could include the inspiration behind its creation, the individuals or team involved, and any challenges or obstacles they faced in bringing it to life.\n\n**Purpose**: Clearly articulate the purpose or goals of the website. What problem or need does it address? How does it aim to make a difference in its users' lives or in the broader context of its industry or community?\n\n**Evolution**: Describe how the website has evolved over time. This could include updates to its design, functionality, or content, as well as any major milestones or achievements it has reached along the way.\n\n**Impact**: Highlight the impact the website has had on its users, community, or industry. Share testimonials, success stories, or metrics that demonstrate its effectiveness in fulfilling its purpose and achieving its goals.\n\n**Unique Features**: Discuss any unique or innovative features that set the website apart from others in its niche. What makes it stand out, and how has it contributed to its success?\n\n**User Experience**: Talk about the user experience the website provides. How does its design, navigation, and functionality enhance the overall experience for visitors? What steps has the team taken to ensure a positive and seamless user experience?\n\n**Community and Engagement**: If applicable, discuss the website's community and how it fosters engagement among its users. This could include features like forums, user-generated content, or social media integration.\n\n**Future Outlook**: Conclude by sharing the website's vision for the future. What are its goals and aspirations moving forward? How does it plan to continue evolving and making an impact in the years to come?\n\nBy weaving these elements together, you can effectively _tell the story of a website, providing insight into its journey, purpose, and significance_.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"telling-the-story-of-a-website-involves-highlighting-its-inception-purpose-evolution-and-impact-heres-how-you-could-go-about-it","text":"Telling the story of a website involves highlighting its inception, purpose, evolution, and impact. Here’s how you could go about it:"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const generationsBackflow = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownPostLayout as $, generationsBackflow as g };
