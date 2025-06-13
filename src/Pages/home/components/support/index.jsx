import React from "react";
import { supportData } from "./supportData";

const SupportSection = () => {
  return (
    <>
      <div className="flex items-center justify-between mt-20">
        {supportData?.map((item, index) => {
          const Icon = item.icon;
          return (
            <div className="flex items-center gap-x-8 " key={index}>
              <span className="text-black">
                <Icon />
              </span>
              <div>
                <h3 className="text-[16px] font-bold text-black font-montserrat">
                  {item.title}
                </h3>
                <p className="text-[16px] font-normal text-black font-montserrat">
                  {item.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SupportSection;
