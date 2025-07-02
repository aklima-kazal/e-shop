import Samsung from "../../../../src/assets/Images/samsung.png";
import OpenAI from "../../../../src/assets/Images/openai.png";
import Amazon from "../../../../src/assets/Images/amazon.png";
import Tencent from "../../../../src/assets/Images/tencent.png";
import Spotify from "../../../../src/assets/Images/spotify.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { useRef } from "react";
import Container from "../../../globalcomponents/Container";
const breakpoints = {
  320: {
    slidesPerView: 1,
  },
  576: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
  1200: {
    slidesPerView: 3,
  },
  1400: {
    slidesPerView: 5,
  },
};
const Companies = () => {
  return (
    <>
      <section className=" py-16 mt-[100px] px-10">
        <Container>
          <div className=" mb-[40px]  h-[60px] lg:h-[80px] flex items-center justify-between">
            <Swiper
              breakpoints={breakpoints}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
            >
              <div>
                <SwiperSlide>
                  <img
                    src={Samsung}
                    alt="companies"
                    className=" h-[40%] w-[60%] mx-[50px] lg:mx-0 "
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={OpenAI}
                    alt="companies"
                    className="  h-[40%] w-[60%] mx-[50px] lg:mx-0 "
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Amazon}
                    alt="companies"
                    className="  h-[40%] w-[60%] mx-[50px] lg:mx-0 "
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Tencent}
                    alt="companies"
                    className="  h-[40%] w-[60%] mx-[50px] lg:mx-0 "
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={Spotify}
                    alt="companies"
                    className="  h-[40%] w-[60%] mx-[50px] lg:mx-0 "
                  />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Companies;
