import React from "react";
import { supportData } from "../../../home/components/support/supportData";
import {
  setCountInc,
  setCountDec,
} from "../../../../service/redux/feature/counterSlice";
import { FaMinus, FaOpencart } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import CommonButton from "../../../../globalcomponents/CommonButton";
import { Link, useNavigate } from "react-router-dom";
import { addCart } from "../../../../service/redux/feature/cartSlice";

const CheckoutCount = ({ SingleProduct }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countValue = useSelector((count) => count.count.count);
  const disableWhenLessThenOne = countValue == 1;
  const handleAddToCartAndRedirect = () => {
    dispatch(addCart({ product: SingleProduct, qty: countValue }));
    navigate("/cart");
  };
  return (
    <>
      <div className="flex items-center justify-between mt-10 md:mt-20">
        <div className="flex items-center gap-x-4 ">
          {supportData?.slice(1, 4)?.map((item, index) => {
            const Icon = item.icon;
            return (
              <div className="flex items-center gap-x-4 " key={index}>
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
        </div>

        <div className="flex items-center gap-x-4">
          <button
            disabled={disableWhenLessThenOne}
            className=" hover:bg-white02 cursor-pointer p-4 rounded-full "
            onClick={() => dispatch(setCountDec())}
          >
            <FaMinus />
          </button>
          <div className="text-black font-poppins font-semibold text-4xl">
            {countValue}
          </div>
          <button
            className=" hover:bg-white02 cursor-pointer p-4 rounded-full"
            onClick={() => dispatch(setCountInc())}
          >
            <FaPlus />
          </button>
        </div>

        <div className="flex items-center gap-x-4">
          <CommonButton className="!bg-orange !mt-5 !mb-5 !lg:mb-0 !lg:mt-[60px] !px-8 !h-12 !border-none rounded-[10px]">
            <span className="font-bold font-montserrat text-base lg:text-lg text-white">
              Buy Now
            </span>
          </CommonButton>
          <button
            onClick={handleAddToCartAndRedirect}
            className="text-orange border-orange cursor-pointer p-2 rounded-[12px] border "
          >
            <FaOpencart size={25} />
          </button>
        </div>
      </div>
    </>
  );
};

export default CheckoutCount;
