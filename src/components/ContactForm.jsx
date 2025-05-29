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
    <div id="contact" class="mt-1 pt-3 lg:p-5">
      <form id="IP-login-form" class="pt-5 bg-test flex flex-col gap-y-4">
        <input
          placeholder="enter email"
          class="border-b border-carribean bg-aliceBlue md:w-2/3 w-1/2 h-10 pl-2 hover:border-test1 mb-2"
        />
        <input
          placeholder="enter password"
          class="border-b border-carribean bg-aliceBlue md:w-2/3 w-1/2 h-10 pl-2 hover:border-test2"
        />
        <div id="btns" class="">
          <h3 class="py-3 text-xl">I'm looking for...</h3>

          <div
            id="btns-container"
            class="text-sm md:w-2/3 pt-1 mt-5 pr-4 grid 2xl:grid-cols-3 grid-cols-2 gap-6"
          >
            {items.map((item) => (
              <button
                id={item.btn}
                className="w-[139px] hover:bg-onyx hover:text-aliceBlue  rounded border border-black mr-5 py-1 pl-2 text-center"
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
              class="pt-5 pl-2 w-[500px] border border-black bg-aliceBlue 2xl:ml-5 2xl:mt-1 mt-4"
            />
          </div>
        </div>
        <div id="btn-wrapper" class="">
          <button class="rounded bg-munsell text-aliceBlue px-3 py-1 border border-carribean opacity-80 hover:opacity-100">
            send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
