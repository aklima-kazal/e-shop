import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../../globalcomponents/Container";
import CartBody from "./components/CartBody";

const Cart = () => {
  const { pathname } = useLocation();
  const pageName = pathname.split("/").slice(1)[0];
  return (
    <>
      <Container>
        <div className="px-10 mt-[64px]">
          <div className="flex items-center gap-x-4 ">
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
          <div className="mt-12">
            <h4 className="font-bold font-poppins text-[56px]">Your Cart</h4>
          </div>
          <div>
            <CartBody />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
