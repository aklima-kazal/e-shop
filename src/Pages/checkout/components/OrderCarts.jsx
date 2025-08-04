import React from "react";

const OrderCarts = ({ pName, price, qty }) => {
  return (
    <>
      <div className="grid grid-cols-[3.5fr_1fr_1.2fr] items-center  gap-x-20">
        <div className=" ">
          <h4 className="font-poppins font-normal text-lg text-black mb-[20px] mt-[16px] ">
            {pName}
          </h4>
        </div>

        <div className="text-black font-montserrat font-bold text-lg">
          {qty}
        </div>

        <div>
          <h6 className="font-semibold font-poppins text-xl text-black">
            ${(qty * price).toFixed(2)}
          </h6>
        </div>
      </div>
    </>
  );
};

export default OrderCarts;
