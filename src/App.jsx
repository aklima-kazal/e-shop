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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:name" element={<SingleProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cheakout" element={<Cheakout />} />
          <Route path="/blog" element={<Blog />} />
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
