import React, { use, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { featuredData } from "../../../home/components/featuredProducts/featuredData";
import Container from "../../../../globalcomponents/Container";
import ProductDetails from "./ProductDetails";
import CheckoutCount from "./CheckoutCount";
import { useDispatch, useSelector } from "react-redux";

import ProductDescription from "./ProductDescription";
import RelatedProducts from "./RelatedProducts";
import Subscribe from "./SingleProductSubsCta";
import {
  setCountReset,
  setCountValue,
} from "../../../../service/redux/feature/counterSlice";

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
    decription,
    delivary,
  } = SingleProduct;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const relatedProducts = featuredData.filter(
    (product) =>
      product.pCategory.toLowerCase() ===
        SingleProduct.pCategory.toLowerCase() && product.id !== SingleProduct.id
  );
  useEffect(() => {
    const cartItems = cart.find((item) => item.id === SingleProduct.id);
    if (cartItems) {
      dispatch(setCountValue(cartItems.qty));
    } else {
      dispatch(setCountReset());
    }
  }, [dispatch, SingleProduct.id]);

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
          </div>
          <div className="mt-[48px]">
            <ProductDetails
              image={image}
              id={id}
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
            <CheckoutCount SingleProduct={SingleProduct} />

            <div className="mt-[48px]">
              <ProductDescription decription={decription} />
            </div>
            <div className="mt-[48px]">
              <RelatedProducts relatedProducts={relatedProducts} />
            </div>
            <div className="mt-[48px]">
              <Subscribe />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProducts;
