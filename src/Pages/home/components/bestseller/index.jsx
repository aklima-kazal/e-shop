import React from "react";
import BestSellerLeft from "./bestsellerLayout/BestSellerLeft";
import BestSellerRight from "./bestsellerLayout/BestSellerRight";

const BestSeller = () => {
  return (
    <>
      <section>
        <div className="mt-[80px] px-10">
          <div className="grid grid-cols-[2fr_1fr]  gap-x-16">
            <BestSellerLeft />
            <BestSellerRight />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
