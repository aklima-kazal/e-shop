import React from "react";
import { supportData } from "./supportData";
import Container from "../../../../globalcomponents/Container";

const SupportSection = () => {
  return (
    <>
      <section className="mt-10 md:mt-20 px-1 md:px-10">
        <Container>
          <div className="w-full flex items-center justify-between gap-x-1 sm:gap-x-0">
            {supportData?.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  className="flex flex-wrap justify-center items-center gap-x-6 "
                  key={index}
                >
                  <span className="text-black mb-1">
                    <Icon size={30} />
                  </span>
                  <div className="text-center md:text-left">
                    <h3 className="text-[13px] md:text-[16px] font-bold text-black font-montserrat">
                      {item.title}
                    </h3>
                    <p className="text-[12px] md:text-[16px] font-normal text-black font-montserrat">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default SupportSection;
