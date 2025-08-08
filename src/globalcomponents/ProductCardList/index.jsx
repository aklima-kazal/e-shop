import { Tooltip } from "antd";
import React from "react";
import { FaOpencart } from "react-icons/fa";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { getStars } from "../../utils/generateRating";
import { getDiscountPrice } from "../../utils/getDiscountPrice";

const ProductCardList = ({
  image,
  discount,
  pCategory,
  id,
  pName,
  ratings,
  totalRatings,
  price,
}) => {
  return (
    <>
      <div className="group relative  rounded-[10px] mb-3 items-center border border-transparent lg:hover:border-white01 grid grid-cols-[0.8fr_2fr_0.8fr] p-4">
        <div className="w-[160px] lg:w-[200px] h-[160px] lg:h-[200px] rounded-[10px] items-center border border-transparent lg:hover:border-white01 p-2 lg:p-4  cursor-pointer">
          <img src={image} alt="img" className="w-full h-full object-cover" />
        </div>
        <div>
          <h6 className="mb-2 text-xs lg:text-sm font-normal text-black font-montserra uppercase tracking-[10px] lg:tracking-[15px]">
            {pCategory}
          </h6>
          {pName?.length > 20 ? (
            <Tooltip
              placement="top"
              color="white"
              title={
                <h4
                  to="/product"
                  className="text-sm font-semibold text-black font-poppins "
                >
                  {pName}
                </h4>
              }
            >
              <Link
                to={`/product/${id}`}
                className="text-base lg:text-xl font-semibold text-black font-poppins truncate"
              >
                {pName}
              </Link>
            </Tooltip>
          ) : (
            <Link
              to={`/product/${id}`}
              className="text-base lg:text-xl font-semibold text-black font-poppins truncate group-hover:text-orange transition-all ease-in-out duration-300"
            >
              {pName}
            </Link>
          )}
          <div className="flex items-center gap-x-2">
            {getStars(ratings)}
            <span className="text-[16px] font-normal text-black font-montserrat">
              ({totalRatings})
            </span>
          </div>
          <div className=" translate-y-[30%]  ">
            <div className="flex items-center gap-x-4">
              <Link
                to="/cart"
                className=" w-[40px] h-[40px] text-orange flex items-center border border-orange rounded-full bg-white  justify-center hover:bg-orange hover:text-white cursor-pointer"
              >
                <FaOpencart size={20} />
              </Link>
              <div className="w-[40px] h-[40px] text-orange flex items-center border border-orange rounded-full bg-white justify-center hover:bg-orange hover:text-white cursor-pointer">
                <IoIosHeartEmpty size={20} />
              </div>
              <div className="w-[40px] h-[40px] text-orange flex items-center border border-orange rounded-full bg-white justify-center hover:bg-orange hover:text-white cursor-pointer">
                <IoShareSocialOutline size={20} />
              </div>
            </div>
          </div>
          {discount && (
            <div className="absolute top-[10px] lg:top-3 right-[-55px] lg:right-6 bg-orange px-3 py-1  w-fit rounded-[5px]">
              <span className="text-sm lg:text-[16px] font-bold text-white font-montserrat">
                {discount}%
              </span>
            </div>
          )}
          <div className="flex items-center gap-x-2 mt-6 lg:mt-5">
            <p className="text-[20px] lg:text-[24px] font-semibold text-black font-poppins group-hover:text-orange transition-all ease-in-out duration-300">
              ${getDiscountPrice(price, discount)}
            </p>
            {discount && (
              <p className="text-[14px] lg:text-[16px] font-normal text-black font-montserrat line-through">
                ${price}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardList;
