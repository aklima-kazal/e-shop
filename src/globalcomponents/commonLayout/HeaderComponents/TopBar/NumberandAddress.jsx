import React from "react";
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

const NumberandAddress = () => {
  return (
    <>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2">
          <div>
            <SlLocationPin />
          </div>
          <div className="text-sm font-montserrat font-normal text-black">
            123 Main Street, Anytown USA
          </div>
        </div>
        <div className="w-[1px] h-[32px] bg-white01"></div>
        <div className="flex items-center gap-2">
          <div>
            <FiPhone />
          </div>
          <div className="text-sm font-montserrat font-normal text-black">
            +1 (555) 123-4567
          </div>
        </div>
      </div>
    </>
  );
};

export default NumberandAddress;
