import React from "react";
import SubscribeImg from "../../../assets/Images/subscribeimg.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";

const ProductCarts = ({ pCategory, pName, subTotal, variant, price, qty }) => {
  return (
    <>
      <div className="mt-4 px-[56px] py-[32px] border border-transparent hover:border hover:border-white01 transition-all ease-in duration-300 rounded-lg relative group">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-x-12 ">
          <div className="flex items-center gap-x-10">
            <div className="p-2 bg-white03 h-[214px] w-[237px] rounded-[5px] ">
              <img
                src={SubscribeImg}
                alt="subscribe"
                className="object-cover h-[90%] max-w-fit "
              />
            </div>
            <div>
              <h6 className="font-montserrat font-normal text-sm text-black uppercase tracking-[5px]">
                {pCategory}
              </h6>
              <h4 className="font-poppins font-semibold text-xl text-black mb-[46px] mt-[16px]">
                {pName}
              </h4>
              <span className="font-montserrat text-base">
                <b>Varient:</b>black
              </span>
            </div>
          </div>
          <div>
            <h6 className="font-semibold font-poppins text-xl text-black">
              ${price}
            </h6>
          </div>

          <div className="flex items-center gap-x-4">
            <button className=" hover:bg-white02 cursor-pointer p-4 rounded-full ">
              <FaMinus />
            </button>
            <div className="text-black font-poppins font-semibold text-4xl">
              {qty}
            </div>
            <button className=" hover:bg-white02 cursor-pointer p-4 rounded-full">
              <FaPlus />
            </button>
          </div>
          <div>${subTotal}</div>
          <div>
            <h6 className="font-semibold font-poppins text-xl text-black">$</h6>
          </div>
        </div>
        <div
          role="button"
          className="absolute top-[50%] right-[50px] translate-y-[-50%] bg-orange rounded-full cursor-pointer p-4 opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 flex items-center justify-center"
        >
          <FiTrash2 size={25} color="white" />
        </div>
      </div>
    </>
  );
};

export default ProductCarts;
