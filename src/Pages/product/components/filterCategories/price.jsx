import { Collapse, Slider } from "antd";
import React, { useState } from "react";

function Price() {
  const [priceRange, setPriceRange] = useState([100, 3000]);
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
                <h4 className="text-[20px] font-bold font-montserrat text-black ">
                  Price
                </h4>
              ),
              children: (
                <div>
                  <div className="flex items-center mt-4 gap-x-3">
                    <div className="flex-1 text-center border border-black01 font-montserrat text-base font-normal rounded-lg py-[21px] px-[31px] text-black">
                      ${priceRange[0].toLocaleString()}
                    </div>
                    <div className="flex-1 text-center border border-black01 font-montserrat text-base font-normal rounded-lg py-[21px] px-[31px] text-black">
                      ${priceRange[1].toLocaleString()}
                    </div>
                  </div>
                  <div className="mt-10">
                    <Slider
                      range
                      min={100}
                      max={10000}
                      step={50}
                      trackStyle={{ backgroundColor: "#FF624C" }}
                      railStyle={{ backgroundColor: "#30303038" }}
                      defaultValue={priceRange}
                      value={priceRange}
                      onChange={(value) => setPriceRange(value)}
                      rootClassName="price-custom-slider"
                    />
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>
    </>
  );
}

export default Price;
