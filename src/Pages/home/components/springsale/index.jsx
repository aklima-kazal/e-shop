import React from "react";
import Container from "../../../../globalcomponents/Container";
import SpringLeft from "./SpringLeft";
import SpringRight from "./SpringRight";

const SpringSale = () => {
  return (
    <>
      <section className="bg-white02 py-16 mt-20 px-10">
        <Container>
          <div className="flex-cols xl:flex items-center md:justify-between ">
            <div className="xl:w-[35%]">
              <SpringLeft />
            </div>
            <div className="xl:w-[55%] ">
              <SpringRight />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SpringSale;
