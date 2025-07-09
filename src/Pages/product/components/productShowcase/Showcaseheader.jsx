import React from "react";
import AllCatagoryMenu from "../../../../globalcomponents/commonLayout/HeaderComponents/menubar/AllCatagories";
import { FaBars } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";

const Showcaseheader = () => {
  return (
    <>
      <div>
        <h4 className="text-black font-semibold font-poppins text-[36px]">
          Products
        </h4>
        <p className="text-black font-montserrat font-normal text-[16px] mt-6">
          Showing 1 - 16 of 160 results.
        </p>
        <div className="flex justify-end gap-x-4">
          <div className=" flex items-center lg:justify-end gap-x-2 lg:gap-x-4 ">
            <div className=" flex items-center lg:justify-end gap-x-2 lg:gap-x-4 ">
              <span className="font-normal font-montserrat text-sm lg:text-[16px] text-black">
                Sort by:
              </span>
              <div className=" ">
                <AllCatagoryMenu
                  className=" w-full items-center font-montserrat font-bold text-sm lg:text-[16px] text-orange cursor-pointer flex justify-between gap-x-4"
                  icons={true}
                />
              </div>
            </div>
            <div className=" flex items-center lg:justify-end gap-x-2 lg:gap-x-4 w-0.5 h-8 bg-white01" />
            <div className=" flex items-center lg:justify-end gap-x-2 lg:gap-x-4 ">
              <AllCatagoryMenu
                className=" w-full items-center font-montserrat font-bold text-sm lg:text-[16px] text-orange cursor-pointer flex justify-between gap-x-4"
                icons={true}
              />
            </div>
            <div className=" flex items-center lg:justify-end gap-x-2 lg:gap-x-4 w-0.5 h-8 bg-white01" />
          </div>
          <div className="flex items-center gap-x-4 ">
            <div className="hover:text-orange cursor-pointer text-black01">
              <IoGridOutline size={24} />
            </div>
            <div className="hover:text-orange cursor-pointer text-black01">
              <FaBars size={24} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcaseheader;
