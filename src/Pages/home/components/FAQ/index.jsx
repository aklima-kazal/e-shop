import React from "react";
import Container from "../../../../globalcomponents/Container";
import FaqLeft from "./FaqLayout/FaqLeft";
import FaqRight from "./FaqLayout/FaqRight";

const FaqSection = () => {
  return (
    <>
      <section className="bg-white02 py-16 mt-20 px-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:gap-x-9">
            <div className="order-1 lg:order-0">
              <FaqLeft />
            </div>
            <FaqRight />
          </div>
        </Container>
      </section>
    </>
  );
};

export default FaqSection;
