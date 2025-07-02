import { Tooltip } from "antd";
import { Link } from "react-router-dom";
import { getStars } from "../../utils/generateRating";
import { getDiscountPrice } from "../../utils/getDiscountPrice";
import { FaOpencart } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";

const ProductCard = ({
  image,
  discount,
  pCategory,
  pName,
  ratings,
  totalRatings,
  price,
}) => {
  return (
    <>
      <div className="group relative border border-transparent hover:border-white01 p-6 rounded-[10px] cursor-pointer lg:w-[285px]">
        <div className="w-full h-[214px]  rounded-[10px] mb-3 items-center ">
          <img src={image} alt="img" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-[50%] left-[50%] translate-y-[-50%] -translate-x-2/4 invisible group-hover:visible transition-all ease-in duration-300 items-center">
          <div className="flex items-center gap-x-4">
            <div className="w-[50px] h-[50px]  text-orange flex items-center border border-orange rounded-full bg-white p-3 justify-center hover:bg-orange hover:text-white">
              <FaOpencart size={20} />
            </div>
            <div className="w-[50px] h-[50px]  text-orange flex items-center border border-orange rounded-full bg-white p-3 justify-center hover:bg-orange hover:text-white">
              <IoIosHeartEmpty size={20} />
            </div>
            <div className="w-[50px] h-[50px]  text-orange flex items-center border border-orange rounded-full bg-white p-3 justify-center hover:bg-orange hover:text-white">
              <IoShareSocialOutline size={20} />
            </div>
          </div>
        </div>
        {discount && (
          <div className="absolute top-3 right-6 bg-orange px-3 py-1  w-fit rounded-[5px]">
            <span className="text-[16px] font-bold text-white font-montserrat">
              -{discount}%
            </span>
          </div>
        )}
        <div>
          <h6 className="mb-2 text-sm font-normal text-black font-montserra uppercase tracking-[15px]">
            {pCategory}
          </h6>
          {pName?.length > 20 ? (
            <Tooltip
              placement="top"
              color="white"
              title={
                <h4
                  to="/product"
                  className="text-md font-semibold text-black font-poppins "
                >
                  {pName}
                </h4>
              }
            >
              <Link
                to="/product"
                className="text-xl font-semibold text-black font-poppins truncate"
              >
                {pName}
              </Link>
            </Tooltip>
          ) : (
            <Link
              to="/product"
              className="text-xl font-semibold text-black font-poppins truncate group-hover:text-orange transition-all ease-in-out duration-300"
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
          <div className="flex items-center gap-x-2">
            <p className="text-[24px] font-semibold text-black font-poppins group-hover:text-orange transition-all ease-in-out duration-300">
              ${getDiscountPrice(price, discount)}
            </p>
            {discount && (
              <p className="text-[16px] font-normal text-black font-montserrat line-through">
                ${price}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
