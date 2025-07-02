import React from "react";
import Container from "../../../globalcomponents/Container";
import overView1 from "../../../assets/Images/products/overview1.png";
import overView2 from "../../../assets/Images/products/overview2.png";

const Overview = () => {
  return (
    <>
      <section className="mt-[60px] lg:mt-[80px] ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_auto] gap-y-5 lg:gap-x-5 px-10">
            <div>
              <img
                src={overView1}
                alt="overview"
                className="w-fit h-full object-cover overflow-hidden"
              />
            </div>
            <div>
              <img
                src={overView2}
                alt="overview"
                className="w-full h-full object-cover overflow-hidden"
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Overview;
