import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const NextButton = () => {
  return (
    <>
      <div className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center border border-black -top-5">
        <IoIosArrowBack />
      </div>
    </>
  );
};

export default NextButton;
