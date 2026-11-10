import React, { use } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../globalcomponents/Container";
import CheckoutForm from "./components/CheckoutForm";
import ProductOrderDetails from "./components/ProductOrderDetails";
import { Helmet } from "react-helmet-async";
import { Form } from "antd";

const Cheakout = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split("/").slice(1)[0];
  const [form] = Form.useForm();

  return (
    <>
      <Helmet>
        <title>Cheakout</title>
      </Helmet>
      <Container>
        <div className="px-10 mt-[64px] ">
          <div className="flex items-center gap-x-4 mt-8">
            <Link
              className="text-[16px] font-normal !text-black hover:!text-orange font-montserrat"
              to="/"
            >
              Home
            </Link>
            <div className="h-[20px] w-[1px] bg-black flex items-center" />
            <span className="text-[16px] font-normal !text-black  font-montserrat">
              {pageName}
            </span>
          </div>
          <div className="font-bold font-poppins text-[32px] md:text-[56px] text-center">
            <h4 className="mt-20 ">Your Cheakout</h4>
          </div>
          <div className="md:mt-12 md:grid md:grid-cols-[1.8fr_1fr] gap-x-12">
            <CheckoutForm form={form} />
            <ProductOrderDetails form={form} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cheakout;
