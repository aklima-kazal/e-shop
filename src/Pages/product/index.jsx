import React from "react";
import Container from "../../globalcomponents/Container";
import ProductRightComponents from "./components/ProductRightComponents";
import ProductLeftComponents from "./components/ProductLeftComponents";
import { Helmet } from "react-helmet-async";
import Subscribe from "./components/Subscribe";

const Product = () => {
  return (
    <>
      <div className="px-10">
        <Container>
          <Helmet>
            <title>Product</title>
          </Helmet>
          <div className="grid grid-cols-[1.3fr_4fr] mt-16">
            <ProductLeftComponents />
            <div className="ml-[-40px] mx-3.5">
              <ProductRightComponents />
            </div>
          </div>
          <Subscribe />
        </Container>
      </div>
    </>
  );
};

export default Product;
