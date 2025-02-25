const items = [
  {
    title: "template 1",
  },
  {
    title: "template 2",
  },
  {
    title: "template 3",
  },
  {
    title: "template 4",
  },
];

const Sq4 = () => {
  return (
    <div
      id="sq4"
      className="border-2 border-black col-span-2 row-span-1 my-4 sq-styles rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
    >
      <div id="wrapper" class="md:p-5 p-1  ">
        <div id="how-it-works-wrapper" class="2xl:p-5 mb-5 md:mx-5">
          <div
            id="grid"
            class="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 2xl gap-5 md:px-5"
          >
            {items.map((item) => (
              <div
                id="templates"
                key={item.title}
                class="p-5 rounded bg-teal text-parchment border-2 border-onyx m-1"
              >
                <h2 class="font-bold">{item.title}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sq4;
