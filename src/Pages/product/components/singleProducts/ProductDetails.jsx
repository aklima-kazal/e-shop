import React from "react";
import Container from "../../../../globalcomponents/Container";
import { getStars } from "../../../../utils/generateRating";
import { getDiscountPrice } from "../../../../utils/getDiscountPrice";
import ReactImageMagnify from "react-image-magnify";

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
        <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr] lg:gap-x-10 px-20">
          <div className="border border-gray rounded-3xl relative ">
            <div className="mt-10 mb-10">
              <img
                src={image}
                alt="product"
                className="w-full h-full block xl:hidden "
              />
            </div>
            <ReactImageMagnify
              className="hidden xl:block object-cover"
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: image,
                  width: 150,
                  height: 150,
                },
                largeImage: {
                  src: image,
                  width: 1200,
                  height: 1800,
                },
                enlargedImageContainerClassName: {
                  zindex: 1000,
                },
                isHintEnabled: true,
                shouldHideHintAfterFirstActivation: true,
              }}
            />
          </div>
          <div className="mt-10 xl:mt-0">
            <div className="flex items-center gap-x-2">
              {getStars(ratings)}
              <span className="text-[16px] font-normal text-black font-montserrat">
                ({totalRatings})
              </span>
            </div>
            <h1 className="text-2xl lg:text-[36px] font-semibold text-black font-poppins mt-2 lg:mt-0">
              {pName}
            </h1>
            <div className="flex items-center gap-x-2">
              <h3 className="text-[32px] lg:text-[56px] font-bold text-black font-poppins hover:text-orange transition-all ease-in-out duration-300 cursor-pointer">
                ${getDiscountPrice(price, discount)}
              </h3>
              {discount && (
                <h4 className="text-[16px] font-normal text-gray font-montserrat line-through">
                  ${price}
                </h4>
              )}
            </div>
            <div className="mt-4 mx-[-60px] lg:mx-0">
              <ul className="mt-6 lg:mt-0 w-full ">
                <li className="flex items-center justify-between gap-x-2 mb-6">
                  <p className="text-[18px] lg:text-[20px] font-semibold text-black font-poppins">
                    Brand
                  </p>
                  <span className="text-[18px] lg:text-[20px] font-normal text-black font-montserrat">
                    {brand}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-x-2 mb-6">
                  <p className="text-[18px] lg:text-[20px] font-semibold text-black font-poppins">
                    Size
                  </p>
                  <span className="text-[18px] lg:text-[20px] font-normal text-black font-montserrat">
                    {size}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-x-2 mb-6">
                  <p className="text-[18px] lg:text-[20px] font-semibold text-black font-poppins">
                    Weight
                  </p>
                  <span className="text-[18px] lg:text-[20px] font-normal text-black font-montserrat">
                    {weight}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-x-16 lg:gap-x-2 mb-6">
                  <p className="text-[18px] lg:text-[20px] font-semibold text-black font-poppins">
                    Delivery
                  </p>
                  <span className="text-[18px] lg:text-[20px] font-normal text-black font-montserrat">
                    {delivery}
                  </span>
                </li>
                <li className="flex items-center justify-between gap-x-12 mb-6">
                  <p className="text-[18px] lg:text-[20px] font-semibold text-black font-poppins">
                    Variant
                  </p>
                  <div className="flex items-center gap-x-2 text-[16px] lg:text-[20px] font-normal text-black font-montserrat">
                    {varient.map((v, i) => (
                      <div
                        key={i}
                        className="rounded-[5px] border border-gray py-2 px-2 lg:py-4 lg:px-8 hover:border-orange transition-all ease-in-out duration-300 cursor-pointer hover:text-orange"
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
