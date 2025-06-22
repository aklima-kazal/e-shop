import React from "react";

const RenderCountDown = ({ days, hours, minutes, seconds }) => {
  return (
    <>
      <div className="flex gap-x-8 items-center">
        <div className="text-center">
          <h4 className="text-[36px] font-poppins font-semibold text-orange">
            {days}
          </h4>
          <span className="text-[16px] font-montserrat font-normal text-black">
            Days
          </span>
        </div>
        <span className="text-[36px] font-poppins font-semibold text-orange mt-[-30px] ">
          :
        </span>
        <div className="text-center">
          <h4 className="text-[36px] font-poppins font-semibold text-orange">
            {hours}
          </h4>
          <span className="text-[16px] font-montserrat font-normal text-black">
            Hours
          </span>
        </div>
        <span className="text-[36px] font-poppins font-semibold text-orange mt-[-30px] ">
          :
        </span>
        <div className="text-center">
          <h4 className="text-[36px] font-poppins font-semibold text-orange">
            {minutes}
          </h4>
          <span className="text-[16px] font-montserrat font-normal text-black">
            Minutes
          </span>
        </div>
        <span className="text-[36px] font-poppins font-semibold text-orange mt-[-30px] ">
          :
        </span>
        <div className="text-center">
          <h4 className="text-[36px] font-poppins font-semibold text-orange">
            {seconds}
          </h4>
          <span className="text-[16px] font-montserrat font-normal text-black">
            Seconds
          </span>
        </div>
      </div>
    </>
  );
};

export default RenderCountDown;
