import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/home";
import Product from "./Pages/product";
import Cart from "./Pages/cart";
import Cheakout from "./Pages/checkout";
import Blog from "./Pages/blog";
import Contact from "./Pages/contact";
import RootLayout from "./layouts/RootLayout";
import SingleProducts from "./Pages/product/components/singleProducts";
import BlogDetails from "./Pages/blog/components/BlogDetails";
import CheckoutPayment from "./Pages/checkout/components/CheckoutPayment";
import Regestration from "./Pages/regestration";
import UserProfile from "./Pages/Profile";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/sign-up" element={<Regestration />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<SingleProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cheakout" element={<Cheakout />} />
          <Route path="/payment" element={<CheckoutPayment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
