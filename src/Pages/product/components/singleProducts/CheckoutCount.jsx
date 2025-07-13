import React from "react";
import { supportData } from "../../../home/components/support/supportData";
import {
  setCountInc,
  setCountDec,
} from "../../../../service/redux/feature/counterSlice";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const CheckoutCount = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <div className=" mt-10 md:mt-20 ">
          <div className="w-[80%] flex items-center gap-x-6">
            {supportData?.slice(1, 4)?.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="flex   items-center gap-x-3 " key={index}>
                  <span className="text-black mb-1">
                    <Icon />
                  </span>
                  <div className="text-center md:text-left">
                    <h3 className="text-[14px] md:text-[16px] font-bold text-black font-montserrat">
                      {item.title}
                    </h3>
                    <p className="text-[12px] md:text-[16px] font-normal text-black font-montserrat">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="flex items-center ml-auto gap-x-8">
              <button
                className=" hover:bg-white02 cursor-pointer p-4 rounded-full "
                onClick={() => dispatch(setCountDec())}
              >
                <FaMinus />
              </button>
              <div className="text-black font-poppins font-semibold text-4xl">
                1
              </div>
              <button
                className=" hover:bg-white02 cursor-pointer p-4 rounded-full"
                onClick={() => dispatch(setCountInc())}
              >
                <FaPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCount;
