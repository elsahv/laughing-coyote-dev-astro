import Sq1 from "./sq1";
import Sq2 from "./sq2";
import Sq3 from "./sq3";
import Sq4 from "./sq4";
import Sq5 from "./sq5";
import Sq6 from "./sq6";

const MasonryGrid = () => {
  return (
    <div id="masonryGrid-wrapper" class="2xl:opacity-80 opacity-100 bg-">
      {/* <div id="masonryGrid-container" className="opacity-90 hover:opacity-100"> */}
      <div id="" className="bg- md:mx-5 mx-0 2xl:px-[80px]">
        {/* <div id="" class="flex justify-center p-3">
            <h2 class="underline text-3xl pb-5 font-bold italic md:mx-5 md:px-5">
              Social Proof- Website Case Studies
            </h2>
          </div> */}

        <div
          id="grid"
          className="bg- grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-2 2xl:px-[100px] p-7"
        >
          <Sq1 />
          <div id="flex" class="flex md:flex-row flex-col col-span-2 bg-">
            <Sq2 />
            <Sq3 />
          </div>
          <Sq4 />
          <div
            id="flex"
            class="flex md:flex-row flex-col md:space-x-4 col-span-3"
          >
            <Sq5 />

            <Sq6 />
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default MasonryGrid;
