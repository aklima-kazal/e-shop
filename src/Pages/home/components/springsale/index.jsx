import React from "react";
import Container from "../../../../globalcomponents/Container";
import SpringLeft from "./SpringLeft";
import SpringRight from "./SpringRight";

const SpringSale = () => {
  return (
    <>
      <section className="bg-white02 py-16 mt-20 px-10">
        <Container>
          <div className="flex items-center justify-between ">
            <div className="w-[35%]">
              <SpringLeft />
            </div>
            <div className="w-[55%] ">
              <SpringRight />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SpringSale;
