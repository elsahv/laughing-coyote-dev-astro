import WindowGrid from "./WindowGrid";

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

const MasonryGrid = () => {
  return (
    <div>
      <div id="grid-wrapper" className="md:mx-5 mx-0 2xl:px-[80px]">
        <div
          id="grid"
          className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-2 2xl:p-[100px] p-7"
        >
          <div
            id="sq1"
            className="pt-[90px] my-5 sq-styles 2xl:col-span-1 col-span-2 2xl:row-span-2 row-span-1 mb-4 2xl:mr-4 ml-[0px]"
          >
            <h3 className="font-bold">Hovey Roofing</h3>
            <img
              src="https://dl.dropboxusercontent.com/scl/fi/5inddieiui1bocegxbi41/IMG_0470.jpg?rlkey=hoj3wvshffzs38wfxqmllcz77&st=dzvoyqvj&dl=0"
              alt=""
              class="border-2 border-black rounded-lg h-[540px] w-[510px]"
            />
          </div>

          <div id="flex" class="flex md:flex-row flex-col sq-styles col-span-2">
            <div id="sq2">
              <div id="img-wrapper" className=" ">
                <h3 className="font-bold pl-1">The Running Quail</h3>
                <img
                  src="https://dl.dropboxusercontent.com/scl/fi/zdvqgpkxstz9g3vr5k70l/1-2-25-rq.png?rlkey=nnsad2qpj4i0e3bti5gkqy8gf&st=czai5y3y&dl=0"
                  alt=""
                  class="border-2 border-black rounded-lg"
                />
              </div>
            </div>
            <div
              id="sq3"
              className="md:w-2/3 bg-teal text-test2  border-2 border-black sq-styles mt-[130px] md:ml-5 rounded-lg "
            >
              <WindowGrid />
            </div>
          </div>

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
                      class="p-5 rounded bg-teal text-parchment border-2 border-onyx m-1"
                    >
                      <h2 class="font-bold">{item.title}</h2>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            id="flex"
            class="flex md:flex-row flex-col md:space-x-4 col-span-3"
          >
            {/*  */}
            {/*  */}
            {/*  */}
            {/* //TODO: CURRENTLY: masonry grid: sq5 --v*/}
            <div
              id="sq5"
              className="mt-3 sq-styles 2xl:col-span-2 col-span-1 row-span-1 rounded-lg bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 border-2 border-black p-5 2xl:h-3/4 h-full ml-[60px]"
            >
              <h4 className="font-bold">About LC</h4>

              <p className="">
                5Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                nobis ea magni quasi, corporis distinctio labore cumque totam
                voluptate officia, non aspernatur et accusamus. Rerum odio
                itaque perferendis facere molestiae? sum dolor sit amet
                consectetur adipisicing elit. Cum nobis ea magni quasi, corporis
                distinctio labore cumque totam voluptate officia, non asperna
              </p>
              <p>
                5Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                itaque libero! Tempora dolore totam beatae nesciunt. Quam,
                harum, mollitia odio esse, voluptates similique nesciunt
                aspernatur iure dolorum laboriosam dolor. Nobis?
              </p>
            </div>
            {/* //TODO: CURRENTLY: masonry grid: sq4 add 3 or 4 for future slideshow? --^*/}
            {/*  */}
            {/*  */}
            {/*  */}

            <div
              id="6"
              className="sq-styles 2xl:ml-5 md:mt-0 pr-5 mt-5 col-span-3 row-span-1 bg-gradient-to-r "
            >
              <img
                src="https://dl.dropboxusercontent.com/scl/fi/7a3l8ubz95eom7np54z39/2-23-25.png?rlkey=l0v1smbmzd7vqdpyt7mh708xh&st=pn5aa0j8&dl=0"
                alt=""
                className="rounded-lg border-2 border-black"
              />
              <h3 className="font-bold pl-1">EH- portfolio</h3>

              {/* <p>
                5Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                itaque libero! Tempora dolore totam beatae nesciunt. Quam,
                harum, mollitia odio esse, voluptates similique nesciunt
                aspernatur iure dolorum laboriosam dolor. Nobis?
              </p> */}
            </div>
          </div>
          {/* //TODO: 5, 6 SIDE BY SIDE v*/}
        </div>
      </div>
    </div>
  );
};

export default MasonryGrid;
