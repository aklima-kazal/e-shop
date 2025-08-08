import AccountDetails from "../Pages/Profile/components/AccountDetails";
import Address from "../Pages/Profile/components/Address";
import Cart from "../Pages/Profile/components/Cart";
import Order from "../Pages/Profile/components/Order";
import Wallet from "../Pages/Profile/components/wallet";

export const UseRenderComponents = (state) => {
  switch (state) {
    case 1:
      return <Order />;
    case 2:
      return <Wallet />;
    case 3:
      return <Cart />;
    case 4:
      return <Address />;
    case 5:
      return <AccountDetails />;
    default:
      return <div>Not Found</div>;
  }
};
