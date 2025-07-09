import React from "react";
import Container from "../../globalcomponents/Container";
import ProductRightComponents from "./components/ProductRightComponents";
import ProductLeftComponents from "./components/ProductLeftComponents";
import { Helmet } from "react-helmet-async";

const Product = () => {
  return (
    <>
      <div>
        <Container>
          <Helmet>
            <title>Product</title>
          </Helmet>
          <div className="grid grid-cols-[2fr_5fr] gap-x-4 mt-16">
            <ProductLeftComponents />
            <ProductRightComponents />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Product;
