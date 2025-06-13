import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const NextButton = () => {
  return (
    <>
      <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center border border-black  hover:bg-orange hover:text-white hover:border-orange">
        <IoIosArrowForward />
      </div>
    </>
  );
};

export default NextButton;
