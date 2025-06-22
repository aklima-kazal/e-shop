import React from "react";
import { useTranslation } from "react-i18next";
import Countdown from "react-countdown";
import RenderCountDown from "./RenderCountDown";
import CommonButton from "../../../../globalcomponents/CommonButton";

const SpringLeft = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h3 className="text-[36px] font-bold text-black font-poppins">
          {t("Spring Sale")}
        </h3>
        <div className="mt-4">
          <Countdown
            date={Date.now() + 10000000000}
            renderer={RenderCountDown}
          />
        </div>
        <CommonButton className="!bg-orange !mt-[60px] !px-8 !h-12 !border-none rounded-[10px]">
          <span className="font-bold font-montserrat text-lg text-white">
            {t("Shop Now")}
          </span>
        </CommonButton>
      </div>
    </>
  );
};

export default SpringLeft;
