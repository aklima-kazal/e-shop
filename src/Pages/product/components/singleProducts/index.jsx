import React from "react";
import { Link, useLocation } from "react-router-dom";
import { featuredData } from "../../../home/components/featuredProducts/featuredData";
import Container from "../../../../globalcomponents/Container";
import ProductDetails from "./ProductDetails";
import CheckoutCount from "./CheckoutCount";
import { Provider } from "react-redux";
import { store } from "../../../../service/redux/store";

const SingleProducts = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(1)[1];
  const SingleProduct = featuredData.find((p) => p.id == id);
  const {
    pCategory,
    brand,
    pName,
    image,
    totalRatings,
    ratings,
    price,
    discount,
    weight,
    size,
    variant,
    description,
    delivary,
  } = SingleProduct;
  console.log(SingleProduct);

  return (
    <>
      <Container>
        <div className="px-10 mt-8">
          <div className="flex items-center gap-x-4 X">
            <Link
              className="text-[16px] font-normal !text-black hover:!text-orange font-montserrat"
              to="/"
            >
              Home
            </Link>
            <div className="h-[20px] w-[1px] bg-black flex items-center" />
            <span className="text-[16px] font-normal !text-black  font-montserrat">
              {pCategory}
            </span>
            <div className="h-[20px] w-[1px] bg-black flex items-center" />
            <span className="text-[16px] font-normal !text-black  font-montserrat">
              {brand}
            </span>
            <div className="h-[20px] w-[1px] bg-black flex items-center" />
            <span className="text-[16px] font-normal !text-black  font-montserrat">
              {pName}
            </span>
            <div className="h-[20px] w-[1px] bg-black flex items-center" />
            <span className="text-[16px] font-bold !text-black  font-montserrat">
              NexSUS ROCK Strix Scar 17 Gaming Laptop
            </span>
          </div>
          <div className="mt-[48px]">
            <ProductDetails
              image={image}
              ratings={ratings}
              totalRatings={totalRatings}
              pName={pName}
              price={price}
              discount={discount}
              brand={brand}
              size={size}
              varient={variant}
              delivery={delivary}
              weight={weight}
            />
          </div>
          <div className="mt-[48px]">
            <div>
              <Provider store={store}>
                <CheckoutCount />
              </Provider>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProducts;
