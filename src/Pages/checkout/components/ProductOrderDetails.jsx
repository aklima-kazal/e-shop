import { Button, Form } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import OrderCarts from "./OrderCarts";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const ProductOrderDetails = ({ form }) => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = cartItems.reduce(
    (acc, crnt) => acc + crnt.price * crnt.qty,
    0
  );
  let handleRedirectOrder = () => {
    if (cartItems.length < 1 || !form.isFieldsTouched()) {
      form.setFields([
        {
          name: "",
          errors: ["This field is required"],
        },
      ]);
    } else {
      navigate("/payment");
    }
  };
  return (
    <>
      <div className="mt-10 bg-white02 p-8 rounded-[15px] h-[700px] overflow-y-auto flex flex-col justify-between">
        <div>
          <h4 className="font-semibold font-poppins text-[24px] text-black ] mb-8">
            Order Details
          </h4>
          <div>
            {cartItems.length === 0 ? (
              <div className="text-center mt-12 text-[30px] font-montserrat font-bold text-red ">
                Your Cart is Empty!
              </div>
            ) : (
              cartItems.map((cart, id) => (
                <OrderCarts
                  key={cart.id}
                  id={cart.id}
                  subTotal={cart.subTotal}
                  pCategory={cart.pCategory}
                  pName={cart.pName}
                  variant={cart.variant}
                  price={cart.price}
                  qty={cart.qty}
                />
              ))
            )}
          </div>
        </div>

        <div className="mt-10 bg-white p-6 rounded-[15px]">
          <div className="font-bold font-montserrat text-[16px] text-black flex items-center justify-between mt-2">
            <span>Total</span>
            <h4>${subTotal}</h4>
          </div>
          <Form form={form}>
            <Form.Item className="!mt-8">
              <Button
                onClick={handleRedirectOrder}
                type="primary"
                htmlType="submit"
                className="!text-white !bg-orange !font-semibold !font-poppins !text-[16px] !h-[48px] !px-6 !rounded-[8px] !flex !items-center !justify-center !w-full"
              >
                Order Now
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ProductOrderDetails;
