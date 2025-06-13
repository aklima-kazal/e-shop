import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../../../globalcomponents/Container";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import ProductCard from "../../../../globalcomponents/productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredData } from "./featuredData";
import NextButton from "./NextButton";
const FeaturedProducts = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <div className="mt-[80px]">
          <div className="flex items-center justify-between mt-[80px]">
            <h3 className="text-[36px] font-semibold text-black font-poppins">
              {t("Featured_Products")}
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
          <div>
            <NextButton />
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {featuredData?.map((product) => (
              <SwiperSlide>
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </>
  );
};

export default FeaturedProducts;
