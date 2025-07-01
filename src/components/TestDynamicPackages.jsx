const title = "title";

const items = [
  {
    pkgNo: "package 1.",
    title: "The Growing Pup",
    desc: "Basic landing page with 1x per month updates. ",
    item1: "a template catered towards people starting out",
    item2: "  Fully responsive 1-page website (home, about, contact, etc.",
    item3: "Mobile-friendly and modern design.",
    item4:
      "  Basic animations/interactions with JavaScript, Contact form (optional).",
    item5:
      "  Free hosting setup (Netlify or GitHub Pages). Delivery in 48hours after content is received",
  },
];

const TestDynamicPackages = ({ title }) => {
  return (
    <div
      id="package-wrapper"
      className=" bg-parchment text-teal 2xl:my-[90px] 2xl:mx-5 bg- sq-styles px-5 flex justify-center "
    >
      <h2>{title}</h2>
      <div id="package-container" className="p-5 pt-1">
        <div
          id="package-grid"
          class="bg p-1 md:m-5 grid md:grid-cols-2 grid-cols-1 gap-5"
        >
          <div
            id="package-sq1"
            className="bg- row-span-2 flex items-center justify-center"
          >
            <img
              src="https://images.pexels.com/photos/10986252/pexels-photo-10986252.jpeg"
              alt=""
              class="sq-styles-teal mr-4"
            />
          </div>
          <div
            id="package-sq2"
            className="bg- row-span-2 flex justify-center items-center "
          >
            <div id="pkg-lists" class="">
              {items.map((item) => (
                <div class=" p-1">
                  <span class="text-xl opacity-80">{item.pkgNo}</span>
                  <h3 class="text-4xl font-extrabold pb-1">{item.title}</h3>
                  <p className="sq-styles-teal bg-teal text-parchment mt-5 p-3">
                    {item.desc}
                  </p>
                  <ul class="lowercase font-semibold list-disc space-y-3 pl-3 pt-5 ">
                    <li class=" font-bold">{item.item1}</li>
                    <li class="">{item.item2}</li>
                    <li class="">{item.item3}</li>
                    <li class="">{item.item4}</li>
                    <li class="">{item.item5}</li>
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div id="package-sq3" className="bg-">
            <img
              src="https://images.pexels.com/photos/304664/pexels-photo-304664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              class="sq-styles -5"
            />
          </div>
          <div id="package-sq4" className="bg-">
            <img
              src="https://dl.dropboxusercontent.com/scl/fi/r2memu9vr71tw03oe57kz/IMG_0300.jpg?rlkey=k9upvwvx4vudmyv88f8srhxlu&st=g5s7cqo5&dl=0"
              alt=""
              class="sq-styles"
            />
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default TestDynamicPackages;
