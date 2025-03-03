const items = [
  {
    title:
      "https://dl.dropboxusercontent.com/scl/fi/5inddieiui1bocegxbi41/IMG_0470.jpg?rlkey=hoj3wvshffzs38wfxqmllcz77&st=dzvoyqvj&dl=0",
  },
  {
    title:
      "https://dl.dropboxusercontent.com/scl/fi/zdvqgpkxstz9g3vr5k70l/1-2-25-rq.png?rlkey=nnsad2qpj4i0e3bti5gkqy8gf&st=czai5y3y&dl=0",
  },
  {
    title:
      "https://dl.dropboxusercontent.com/scl/fi/5inddieiui1bocegxbi41/IMG_0470.jpg?rlkey=hoj3wvshffzs38wfxqmllcz77&st=dzvoyqvj&dl=0",
  },
  {
    title:
      "https://dl.dropboxusercontent.com/scl/fi/zdvqgpkxstz9g3vr5k70l/1-2-25-rq.png?rlkey=nnsad2qpj4i0e3bti5gkqy8gf&st=czai5y3y&dl=0",
  },
];

const Sq4 = () => {
  return (
    <div
      id="sq4"
      className="col-span-2 row-span-1 my-4 rounded-lg -gradient-to-r from-pink-500 via-red-500 to-yellow-500 md:p-5 p-1"
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
                  class="border border-onyx rounded-lg h-full"
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
