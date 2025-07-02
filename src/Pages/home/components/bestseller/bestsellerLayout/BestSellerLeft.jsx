import React from "react";
import { useTranslation } from "react-i18next";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { featuredData } from "../../featuredProducts/featuredData";
import ProductCard from "../../../../../globalcomponents/productCard";

const BestSellerLeft = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className=" mt-[80px] mb-10">
        <div className="flex items-center justify-between mb-12">
          <h3 className="text-[24px] md:text-[36px] font-semibold text-black font-poppins ">
            {t("Best Seller")}
          </h3>

          <Link
            to="/product"
            className="flex items-center gap-x-2 font-bold font-montserrat text-[16px] text-orange group"
          >
            {t("View_All")}
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <CgArrowLongRight size={30} />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 mt-10">
          {featuredData?.slice(0, 6).map((product) => (
            <ProductCard
              key={product.id}
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
      </div>
    </>
  );
};

export default BestSellerLeft;
