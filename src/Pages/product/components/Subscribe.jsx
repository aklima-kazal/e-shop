import React from "react";
import SubscribeForm from "../../../globalcomponents/subscribe/form";

const Subscribe = () => {
  return (
    <>
      <section className="mt-[8px] lg:mt-[8px] ">
        <div className="bg-linear-to-r from-gray to-white02 rounded-[25px] grid grid-cols-1 2xl:grid-cols-[2fr_3fr]">
          <span></span>
          <div className="py-6 lg:py-[80px] pl-8 px-6 lg:px-60 xl:pl-[200px] ">
            <SubscribeForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
