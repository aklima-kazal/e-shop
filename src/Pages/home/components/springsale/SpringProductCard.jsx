import { Progress, Tooltip } from "antd";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoShareSocialOutline } from "react-icons/io5";
import { getStars } from "../../../../utils/generateRating";
import { getDiscountPrice } from "../../../../utils/getDiscountPrice";
import useStockStatus from "../../hooks/useStockStatus";
import { SiOllama } from "react-icons/si";

const SpringProductCard = ({
  image,
  discount,
  pCategory,
  pName,
  ratings,
  totalRatings,
  price,
  stock,
  sold,
}) => {
  const { status, color, percentage } = useStockStatus(sold, stock);
  return (
    <>
      <div className="relative  hover:bg-white transition-all ease-in duration-300 p-6 rounded-[10px] cursor-pointer bg-white01 ">
        <div className="w-full h-[345px] overflow-hidden object-cover rounded-[10px] mb-3">
          <img src={image} alt="img" className="w-full h-full object-cover " />
        </div>

        {getDiscountPrice && (
          <div className="absolute top-2 right-5 bg-orange px-5 py-1.5  w-[100px] h-[100px] rounded-full items-center justify-center flex">
            <span className="text-[24px] font-semibold text-white font-poppins">
              {discount}%
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
          <div className="w-full bg-gray-400 rounded-xl relative z-1">
            <div
              style={{ width: `${percentage}%`, backgroundColor: color }}
              className="absolute top-0 left-0 h-full rounded-xl -z-1"
            ></div>
            <h4 className="text-center">{status}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpringProductCard;
