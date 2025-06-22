import React from "react";
import BannerImg from "../../../assets/Images/banner.jpg";
import Container from "../../../globalcomponents/Container";

const Banner = () => {
  return (
    <>
      <Container>
        <div className="mt-10 px-10">
          <img
            src={BannerImg}
            alt="banner"
            className="object-cover overflow-hidden "
          />
        </div>
      </Container>
    </>
  );
};

export default Banner;
