const items = [
  {
    btn: "web design",
  },
  {
    btn: "seo",
  },
  {
    btn: " wordpress",
  },
  {
    btn: "react",
  },
  {
    btn: "content",
  },
  {
    btn: "not picky really...",
  },
];

const ContactForm = () => {
  return (
    <div className="text-onyx bg-parchment border-2 border-onyx rounded-tl-2xl rounded-bl-2xl 2xl:pl-5 2xl:ml-5 ml-3 pl-2">
      <div id="contact" class="mt-1 pt-3 lg:p-5">
        <form id="IP-login-form" class="pt-5 bg-test flex flex-col gap-y-4">
          <input
            placeholder="enter email"
            class="rounded-lg border border-black bg-teal md:w-2/3 w-1/2 h-10 pl-2 hover:border-test1 mb-2"
          />
          <input
            placeholder="enter password"
            class="rounded-lg border border-black bg-teal md:w-2/3 w-1/2 h-10 pl-2 hover:border-test2"
          />
          <div id="btns-wrapper " class="">
            <h3 class="py-3 text-xl">I'm looking for...</h3>

            <div
              id="btns-container"
              class="bg- text-sm md:w-2/3 pt-1 mt-5 pr-4 grid 2xl:grid-cols-3 grid-cols-2 gap-6"
            >
              {items.map((item) => (
                <button
                  id={item.btn}
                  className="w-[139px] sq-styles opacity-80 hover:opacity-100 hover:bg-test2 rounded border border-black mr-5 py-1 pl-2 text-center"
                >
                  {item.btn}
                </button>
              ))}
            </div>
          </div>
          <div id="wrapper" class="mt-[50px] bg- 2xl:flex items-center">
            <p class="">How would you describe your project?</p>
            <div className="">
              <textarea
                placeholder="ex: what are your business goals?"
                class="pt-5 pl-2 md:w-[500px] w-[350px] border border-black rounded-lg bg-teal 2xl:ml-5 2xl:mt-1 mt-4"
              />
            </div>
          </div>
          <div id="btn-wrapper" class="">
            <button class="rounded bg-orange text-onyx px-3 py-1 border border-carribean opacity-80 hover:opacity-100">
              send
            </button>
          </div>
        </form>

        <div id="all-contact-info" class="mt-5 bg-">
          <div id="email" class="">
            elsahvy@gmail.com
          </div>
          <div id="sm-container">
            <ul id="sm-links" class="flex gap-x-5 pt-1 text-md opacity-80 pl-1">
              <li>linkedIn</li>
              <li>fb</li>
              <li>inst</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
