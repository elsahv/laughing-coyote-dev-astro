import Sq1 from "./sq1";
import Sq2 from "./sq2";
import Sq3 from "./sq3";
import Sq4 from "./sq4";
import Sq5 from "./sq5";
import Sq6 from "./sq6";

const SocialProof = () => {
  return (
    <div id="socialProof-container">
      <div id="socialProof-grid" className="md:mx-5 mx-0 2xl:px-[80px]">
        <div
          id="grid"
          className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:gap-2 2xl:p-[100px] p-7"
        >
          <Sq1 />
          <div id="flex" class="flex md:flex-row flex-col sq-styles col-span-2">
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
    </div>
  );
};

export default SocialProof;
