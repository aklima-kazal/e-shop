import React from "react";
import ProductCard from "../../../../globalcomponents/productCard";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CgArrowLongRight } from "react-icons/cg";

const RelatedProducts = ({ relatedProducts }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center justify-between mb-10">
        <h3 className="text-[24px] md:text-[36px] font-semibold text-black font-poppins ">
          {t("Featured_Products")}
        </h3>

        <Link
          to="/product"
          className="flex items-center gap-x-2 font-bold font-montserrat text-sm lg:text-[16px] text-orange group"
        >
          {t("View_All")}
          <span className="group-hover:translate-x-2 transition-transform duration-300">
            <CgArrowLongRight size={30} />
          </span>
        </Link>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 
           mx-auto xl: gap-y-5 xl:gap-x-14 mt-10 "
      >
        {relatedProducts?.slice(0, 4)?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            discount={product.discount}
            pCategory={product.pCategory}
            pName={product.pName}
            ratings={product.ratings}
            totalRatings={product.totalRatings}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
};

export default RelatedProducts;
