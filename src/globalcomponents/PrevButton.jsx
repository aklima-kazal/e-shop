import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const PrevButton = () => {
  return (
    <>
      <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center border border-black hover:bg-orange hover:text-white hover:border-orange">
        <IoIosArrowBack />
      </div>
    </>
  );
};

export default PrevButton;
