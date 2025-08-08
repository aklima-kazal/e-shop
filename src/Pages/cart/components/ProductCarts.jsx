import React from "react";
import SubscribeImg from "../../../assets/Images/subscribeimg.png";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { updateQty } from "../../../service/redux/feature/cartSlice";

const ProductCarts = ({ pCategory, pName, price, qty, id, subTotal }) => {
  const dispatch = useDispatch();
  const handleQuentity = (id, newQty) => {
    if (newQty >= 1) {
      dispatch(updateQty({ id, qty: newQty }));
    }
  };
  return (
    <>
      <div className="mt-4 px-[56px] py-[32px] border border-transparent lg:hover:border lg:hover:border-white01 transition-all ease-in duration-300 rounded-lg relative group">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center gap-x-2 lg:gap-x-12 ">
          <div className="flex items-center gap-x-10">
            <div className="p-2 bg-white03 h-[214px] w-[237px] rounded-[5px] hidden md:block">
              <img
                src={SubscribeImg}
                alt="subscribe"
                className="object-cover h-[90%] max-w-fit "
              />
            </div>
            <div className="ml-[-70px] lg:ml-0">
              <h6 className="font-montserrat font-normal text-xs lg:text-sm text-black uppercase tracking-[5px]">
                {pCategory}
              </h6>
              <h4 className="font-poppins font-semibold text-base lg:text-xl text-black mb-[46px] mt-[16px]">
                {pName}
              </h4>
              <span className="font-montserrat text-base">
                <b>Varient:</b>black
              </span>
            </div>
          </div>
          <div>
            <h6 className="font-semibold font-poppins text-base lg:text-xl text-black">
              ${price}
            </h6>
          </div>

          <div className="flex items-center gap-x-4">
            <button
              onClick={() => handleQuentity(id, qty - 1)}
              className=" hover:bg-white02 cursor-pointer p-4 rounded-full "
            >
              <FaMinus />
            </button>
            <div className="text-black font-poppins font-semibold text-2xl lg:text-4xl">
              {qty}
            </div>
            <button
              onClick={() => handleQuentity(id, qty + 1)}
              className=" hover:bg-white02 cursor-pointer p-4 rounded-full"
            >
              <FaPlus />
            </button>
          </div>

          <div>
            <h6 className="font-semibold font-poppins text-base lg:text-xl text-black">
              ${(qty * price).toFixed(2)}
            </h6>
          </div>
          <div
            role="button"
            className="absolute top-[80%] lg:top-[50%] right-[50px] translate-y-[-50%] bg-orange rounded-full cursor-pointer p-4 opacity-0 group-hover:opacity-100 transition-all ease-in duration-300 flex items-center justify-center"
          >
            <FiTrash2 size={25} color="white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCarts;
