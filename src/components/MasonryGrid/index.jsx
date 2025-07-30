import Sq1 from "./sq1";
import Sq2 from "./sq2";
import Sq3 from "./sq3";
import Sq4 from "./sq4";
import Sq5 from "./sq5";
import Sq6 from "./sq6";

// ? CONTENT TO COME BACK TO V
// ## FIND UNIQUE COMBINATIONS of skills, experiences, and personality (use to set self apart and become top 10% in industry)**
// ? CONTENT TO COME BACK TO ^

const BuildAuthority = () => {
  return (
    <div id="wrapper" class="2xl:opacity-80 opacity-100 py-5 my-5">
      <div id="" className="bg- md:mx-5 mx-0 2xl:px-[80px]">
        <div
          id="grid"
          className="bg- grid grid-cols-3 2xl:gap-2 2xl:px-[100px] p-7"
        >
          <Sq1 />
          <div id="flex" class="flex flex-row   col-span-2  ">
            <Sq2 />
            <Sq3 />
          </div>
          <Sq4 />
          <div id="flex" class="flex  flex-row  md:space-x-4 col-span-3">
            <Sq5 />
            <Sq6 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildAuthority;
