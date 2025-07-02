import { useTranslation } from "react-i18next";
import Container from "../../../../globalcomponents/Container";
import AllCatagoryMenu from "../../../../globalcomponents/commonLayout/HeaderComponents/menubar/AllCatagories";
import ProductCard from "../../../../globalcomponents/productCard";
import { featuredData } from "../featuredProducts/featuredData";
import { Button } from "antd";
import { useState } from "react";

const NewProducts = () => {
  const [initialData, setInitialData] = useState(5);
  const { t } = useTranslation();
  const loadMore = () => {
    setInitialData((prev) => prev + 5);
  };
  return (
    <>
      <section className="mt-[80px] px-10">
        <Container>
          <div className="relative ">
            <div className="flex items-center justify-between mt-[80px]">
              <h3 className="text-[24px] md:text-[36px] font-semibold text-black font-poppins">
                {t("New_Products")}
              </h3>

              <div className=" flex items-center lg:justify-end gap-x-2 lg:gap-x-4 lg:w-[50%]">
                <span className="font-normal font-montserrat text-sm lg:text-[16px] text-black">
                  {t("Sort by:")}
                </span>
                <div className=" lg:w-[30%]">
                  <AllCatagoryMenu
                    className=" w-full items-center font-montserrat font-bold text-sm lg:text-[16px] text-orange cursor-pointer flex justify-between gap-x-4"
                    icons={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 
           xl:w-[95%] mx-auto xl:mx-0 gap-y-5 xl:gap-x-14 mt-10 "
          >
            {featuredData?.slice(0, initialData)?.map((product) => (
              <ProductCard
                key={product.id}
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
          {initialData < featuredData?.length && (
            <div className="flex items-center justify-center">
              <Button
                onClick={loadMore}
                className="mt-10 !text-base !font-bold !font-montserrat !text-orange !px-[40px] !h-13 !border !border-orange !rounded-[10px]"
              >
                {t("Load_More")}
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default NewProducts;
