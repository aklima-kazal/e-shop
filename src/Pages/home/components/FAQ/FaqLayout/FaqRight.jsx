import React from "react";
import { useTranslation } from "react-i18next";
import CommonButton from "../../../../../globalcomponents/CommonButton";

const FaqRight = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="self-end">
        <h4 className="text-[36px] font-semibold text-black font-poppins leading-[45px]">
          {t("Frequently_Asked_Questions")}
        </h4>
        <p className="text-[20px] font-normal text-black font-montserrat">
          Questions that get asked the most by our clients. Get any burning
          questions?
        </p>
        <CommonButton className="!bg-orange !mt-[60px] !px-8 !h-12 !border-none rounded-[10px]">
          <span className="font-bold font-montserrat text-lg text-white">
            {t("Ask A Question")}
          </span>
        </CommonButton>
      </div>
    </>
  );
};

export default FaqRight;
