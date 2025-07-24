import { useSelector } from "react-redux";
import ProductCarts from "./ProductCarts";
const CartBody = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const subTotal = cartItems.reduce(
    (acc, crnt) => acc + crnt.price * crnt.qty,
    0
  );
  return (
    <>
      <div>
        <div className="bg-white02 px-[56px] py-[32px] rounded-[15px]">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">
            <div>
              <h4 className="font-bold font-montserrat text-base text-black">
                PRODUCT
              </h4>
            </div>
            <div>
              <h4 className="font-bold font-montserrat text-base text-black">
                PRICE
              </h4>
            </div>
            <div>
              <h4 className="font-bold font-montserrat text-base text-black">
                QTY
              </h4>
            </div>
            <div>
              <h4 className="font-bold font-montserrat text-base text-black">
                TOTAL
              </h4>
            </div>
          </div>
        </div>
        {cartItems.length === 0 ? (
          <div className="text-center mt-12 text-[20px] font-montserrat font-semibold text-orange">
            Your Cart is Empty!
          </div>
        ) : (
          cartItems.map((cart, id) => (
            <ProductCarts
              key={cart.id}
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
    </>
  );
};

export default CartBody;
