import { Button, Checkbox, Collapse } from "antd";
import React, { useState } from "react";
import { featuredData } from "../../../home/components/featuredProducts/featuredData";
import { brandData } from "./brandData";

const Brands = () => {
  const [initialData, setInitialData] = useState(0);

  const moreBrands = () => {
    setInitialData((prev) => prev + 5);
  };
  return (
    <>
      <div className="">
        <Collapse
          size="small"
          rootClassName="product-custom-collapse"
          items={[
            {
              key: "1",
              label: (
                <h4 className="text-black font-montserrat font-bold text-base lg:text-xl ">
                  Brands
                </h4>
              ),
              children: (
                <ul className="">
                  <li className="flex justify-between gap-x-9">
                    <Checkbox className="!text-black !mb-3 !font-normal !font-montserrat !text-[16px] !last:mb-0">
                      Apple
                    </Checkbox>
                    <span>( 565 )</span>
                  </li>
                  <li className="flex justify-between gap-x-9">
                    <Checkbox className="!text-black !mb-3 !font-normal !font-montserrat !text-[16px]">
                      Samsung
                    </Checkbox>
                    <span>( 428 )</span>
                  </li>
                  <li className="flex justify-between gap-x-9">
                    <Checkbox className="!text-black !mb-3 !font-normal !font-montserrat !text-[16px]">
                      ASUS
                    </Checkbox>
                    <span>( 323 )</span>
                  </li>
                  <li className="flex justify-between gap-x-9">
                    <Checkbox className="!text-black !mb-3 !font-normal !font-montserrat !text-[16px]">
                      Dell
                    </Checkbox>
                    <span>( 298 )</span>
                  </li>
                  <li className="flex justify-between gap-x-9">
                    <Checkbox className="!text-black !font-normal !font-montserrat !text-[16px] ">
                      Lenovo
                    </Checkbox>
                    <span>( 180 )</span>
                  </li>
                  {brandData &&
                    brandData.slice(0, initialData).map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex justify-between gap-x-9"
                        >
                          <Checkbox className="!text-black !mb-3 !font-normal !font-montserrat !text-[16px] !last:mb-0">
                            {item.name}
                          </Checkbox>
                          <span>( 234 )</span>
                        </li>
                      );
                    })}
                  <div className="flex items-center justify-start  gap-y-4">
                    {brandData && brandData.length > initialData && (
                      <Button
                        onClick={moreBrands}
                        className=" mt-6 !text-base !font-bold !font-montserrat underline hover:!text-orange !text-black !bg-transparent !border-none "
                      >
                        More Brands
                      </Button>
                    )}
                  </div>
                </ul>
              ),
            },
          ]}
        />
      </div>
    </>
  );
};

export default Brands;
