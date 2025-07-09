import Categories from "./filterCategories/categories";
import Brands from "./filterCategories/brands";
import Price from "./filterCategories/price";
import { Divider } from "antd";

const ProductLeftComponents = () => {
  return (
    <>
      <div className=" bg-white02 p-1 rounded-xl w-[80%]">
        <Categories />
        <Divider />
        <Brands />
        <Divider />
        <Price />
      </div>
    </>
  );
};

export default ProductLeftComponents;
