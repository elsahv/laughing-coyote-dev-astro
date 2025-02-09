import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const HamburgerMenu = () => {
  return (
    <div className="2xl:hidden bg- flex justify-end items-center">
      <div className="pb-2 pr-3 bg-">
        <GiHamburgerMenu />
      </div>
      <div>
        <div className="">
          <div className="flex justify-end p-2">
            <div className="text-2xl text-blue-200">
              <GrClose />
            </div>
          </div>
          <div className="text-teal-200 text-right space-y-4 p-2 text-2xl">
            {/* <MenuItems /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
