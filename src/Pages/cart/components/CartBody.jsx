import { useSelector } from "react-redux";
import ProductCarts from "./ProductCarts";
import CommonButton from "../../../globalcomponents/CommonButton";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
const CartBody = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = cartItems.reduce(
    (acc, crnt) => acc + crnt.price * crnt.qty,
    0
  );
  let handleRedirectOrder = () => {
    navigate("/cheakout");
  };
  return (
    <>
      <div className="border-b border-white01 transition-all ease-in duration-300 rounded-[15px]">
        <div className="bg-white02 px-[56px] py-[32px] rounded-[15px]">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-x-14 lg:gap-x-0 ml-[-45px] lg:ml-0">
            <div>
              <h4 className="font-bold font-montserrat text-sm lg:text-base text-black">
                PRODUCT
              </h4>
            </div>
            <div>
              <h4 className="font-bold font-montserrat text-sm lg:text-base text-black">
                PRICE
              </h4>
            </div>
            <div>
              <h4 className="font-bold font-montserrat text-sm lg:text-base text-black">
                QTY
              </h4>
            </div>
            <div>
              <h4 className="font-bold font-montserrat text-sm lg:text-base text-black">
                TOTAL
              </h4>
            </div>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <div className="text-center mt-12 text-[30px] font-montserrat font-bold text-red">
            Your Cart is Empty!
          </div>
        ) : (
          cartItems.map((cart, id) => (
            <ProductCarts
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
        <div className="mt-12 flex items-center justify-between lg:gap-x-10">
          <div className="p-8 border border-transparent hover:border hover:border-white01 transition-all ease-in duration-300 rounded-[15px] w-fit flex items-center justify-center gap-x-20">
            <span className="font-normal font-montserrat text-base text-black">
              Enter coupon code (ex: FIRSTPAY)
            </span>
            <h6 className="cursor-pointer font-semibold font-poppins text-xl text-black hover:underline">
              Apply Code
            </h6>
          </div>

          <div className=" p-8 bg-white02 rounded-[15px] w-fit flex items-center justify-center gap-x-4">
            <h4 className="font-bold font-montserrat text-base text-black">
              SUB TOTAL
            </h4>
            <h6 className="font-semibold font-poppins text-xl text-orange">
              ${subTotal.toFixed(2)}
            </h6>
          </div>
        </div>
        <div className="mt-12 flex items-center justify-end gap-x-4">
          <CommonButton className="hover:!bg-orange !mb-[60px] !lg:mb-0 ! !px-8 !h-12 !border-none rounded-[10px]">
            <span className="font-bold font-montserrat text-lg text-black">
              {t("Continue Shopping")}
            </span>
          </CommonButton>

          <CommonButton
            onClick={handleRedirectOrder}
            className="!bg-orange !mb-[60px] !lg:mb-0  !px-8 !h-12 !border-none rounded-[10px]"
          >
            <span className="font-bold font-montserrat text-lg text-white">
              {t("Order Now")}
            </span>
          </CommonButton>
        </div>
      </div>
    </>
  );
};

export default CartBody;
