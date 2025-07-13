import React from "react";
import { featuredData } from "../../../home/components/featuredProducts/featuredData";
import ProductCard from "../../../../globalcomponents/productCard";
import { useSelector } from "react-redux";
import ProductCardList from "../../../../globalcomponents/ProductCardList";

const Showcasebody = () => {
  const viewMode = useSelector((state) => state.view.mode);
  return (
    <>
      <div className="mt-4 ">
        {viewMode == "grid" ? (
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 
           mx-auto xl: gap-y-5 xl:gap-x-14 mt-10 "
          >
            {featuredData?.slice(0, 20)?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                discount={product.discount}
                pCategory={product.pCategory}
                pName={product.pName}
                ratings={product.ratings}
                totalRatings={product.totalRatings}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <div
            className="
           mx-auto xl: gap-y-5 xl:gap-x-14 mt-10 "
          >
            {featuredData?.slice(0, 20)?.map((product) => (
              <ProductCardList
                key={product.id}
                id={product.id}
                image={product.image}
                discount={product.discount}
                pCategory={product.pCategory}
                pName={product.pName}
                ratings={product.ratings}
                totalRatings={product.totalRatings}
                price={product.price}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Showcasebody;
