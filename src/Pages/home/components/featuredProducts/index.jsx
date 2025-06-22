import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../../../../globalcomponents/Container";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";
import ProductCard from "../../../../globalcomponents/productCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { featuredData } from "./featuredData";
import { Navigation } from "swiper/modules";
import PrevButton from "../../../../globalcomponents/PrevButton";
import NextButton from "../../../../globalcomponents/NextButton";
const FeaturedProducts = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="mt-[80px] px-10">
        <Container>
          <div className="relative ">
            <div className="flex items-center justify-between mt-[80px] mb-10">
              <h3 className="text-[36px] font-semibold text-black font-poppins ">
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
            <div className="flex items-center justify-between top-[40%] absolute z-50 -right-4 swiper-button-next cursor-pointer">
              <NextButton />
            </div>
            <div className="flex items-center justify-between top-[40%] absolute z-50 -left-4 swiper-button-prev cursor-pointer">
              <PrevButton />
            </div>

            <Swiper
              spaceBetween={50}
              slidesPerView={5}
              modules={[Navigation]}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
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
      </section>
    </>
  );
};

export default FeaturedProducts;
