import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SpringProductCard from "./SpringProductCard";
import { SpringSaleData } from "./SpringSaleData";
import NextButton from "../../../../globalcomponents/NextButton";
import PrevButton from "../../../../globalcomponents/PrevButton";
const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 2,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 2,
  },
  1200: {
    slidesPerView: 2,
  },
  1400: {
    slidesPerView: 2,
  },
};
const SpringRight = () => {
  return (
    <>
      <div className="relative shadow-2xl shadow-gray lg:shadow-none rounded-[50px]">
        <div className="flex items-center justify-between top-[40%] absolute z-50 -right-4 swiper-button-next-spring cursor-pointer ">
          <NextButton />
        </div>
        <div className="flex items-center justify-between top-[40%] absolute z-50 -left-4 swiper-button-prev-spring cursor-pointer">
          <PrevButton />
        </div>
        <Swiper
          spaceBetween={10}
          breakpoints={breakpoints}
          slidesPerView={2}
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next-spring",
            prevEl: ".swiper-button-prev-spring",
          }}
        >
          {SpringSaleData?.map((product) => (
            <SwiperSlide>
              <SpringProductCard
                key={product.id}
                image={product.image}
                discount={product.discount}
                pCategory={product.pCategory}
                pName={product.pName}
                ratings={product.ratings}
                totalRatings={product.totalRatings}
                price={product.price}
                stock={product.stock}
                sold={product.sold}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SpringRight;
