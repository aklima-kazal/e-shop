import React from "react";
import Container from "../../../../globalcomponents/Container";
import { getStars } from "../../../../utils/generateRating";
import { getDiscountPrice } from "../../../../utils/getDiscountPrice";

const ProductDetails = ({
  image,
  ratings,
  totalRatings,
  pName,
  price,
  discount,
  brand,
  size,
  varient,
  delivery,
  weight,
}) => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-[1.4fr_1fr] gap-x-10 px-10">
          <div className="border border-gray rounded-3xl ">
            <img src={image} alt="" className=" mx-auto " />
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              {getStars(ratings)}
              <span className="text-[16px] font-normal text-black font-montserrat">
                ({totalRatings})
              </span>
            </div>
            <h1 className="text-[36px] font-semibold text-black font-poppins">
              {pName}
            </h1>
            <div className="flex items-center gap-x-2">
              <h3 className="text-[56px] font-bold text-black font-poppins hover:text-orange transition-all ease-in-out duration-300 cursor-pointer">
                ${getDiscountPrice(price, discount)}
              </h3>
              {discount && (
                <h4 className="text-[16px] font-normal text-gray font-montserrat line-through">
                  ${price}
                </h4>
              )}
            </div>
            <div className="mt-4">
              <ul className="w-full ">
                <li className="flex items-center justify-between gap-x-2 mb-6">
                  <p className="text-[20px] font-semibold text-black font-poppins">
                    Brand
                  </p>
                  <span className="text-[20px] font-normal text-black font-montserrat">
                    {brand}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-x-2 mb-6">
                  <p className="text-[20px] font-semibold text-black font-poppins">
                    Size
                  </p>
                  <span className="text-[20px] font-normal text-black font-montserrat">
                    {size}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-x-2 mb-6">
                  <p className="text-[20px] font-semibold text-black font-poppins">
                    Weight
                  </p>
                  <span className="text-[20px] font-normal text-black font-montserrat">
                    {weight}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-x-2 mb-6">
                  <p className="text-[20px] font-semibold text-black font-poppins">
                    Delivery
                  </p>
                  <span className="text-[20px] font-normal text-black font-montserrat">
                    {delivery}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-x-12 mb-6">
                  <p className="text-[20px] font-semibold text-black font-poppins">
                    Variant
                  </p>
                  <div className="flex items-center gap-x-2 text-[20px] font-normal text-black font-montserrat">
                    {varient.map((v, i) => (
                      <div
                        key={i}
                        className="rounded-[5px] border border-gray py-4 px-8 hover:border-orange transition-all ease-in-out duration-300 cursor-pointer hover:text-orange"
                      >
                        <span className="">{v}</span>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
