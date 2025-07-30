const items = [
  {
    title:
      "https://dl.dropboxusercontent.com/scl/fi/0kaamz8nlz7q1mlzkbjr2/doublepanel-screenshot.jpg?rlkey=zq5l55wn183j3v1220u0qubz7&st=1ht2jlbv&dl=0",
  },
  {
    title:
      "https://dl.dropboxusercontent.com/scl/fi/oraxtrdwq2apy6x4f87xj/fish-screenshot.jpg?rlkey=8woeczr9d8n7gqpqfbbnayb9e&st=7gs9t6km&dl=0",
  },

  {
    title:
      "https://dl.dropboxusercontent.com/scl/fi/7a3l8ubz95eom7np54z39/2-23-25.png?rlkey=l0v1smbmzd7vqdpyt7mh708xh&st=ibyknj1f&dl=0",
  },
  {
    title:
      "https://dl.dropboxusercontent.com/scl/fi/a8ubz3g7r5ejmez2gj5m7/wtbh.png?rlkey=yl5005egi1t4wybtid6f1aclw&st=4tk1nsxv&dl=0",
  },
];

const Sq4 = () => {
  return (
    <div
      id="sq4"
      className="col-span-2   my-4 rounded-lg -gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:p-5 p-1"
    >
      <h2>Interactive LC TEMPLATES</h2>
      <div id="wrapper" class="  ">
        <div id="how-it-works-wrapper" class="">
          <div
            id="grid"
            class="grid 2xl:grid-cols-4 md:grid-cols-2 grid-cols-1 2xl gap-5 "
          >
            {items.map((item) => (
              <div
                id="templates"
                key={item.title}
                class=" text-parchment rounded"
              >
                <img
                  src={item.title}
                  alt=""
                  class="border border-carribean rounded-lg h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sq4;
