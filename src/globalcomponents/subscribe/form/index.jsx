import { Input } from "antd";
import { useTranslation } from "react-i18next";
import CommonButton from "../../CommonButton";

const SubscribeForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <h3 className="font-semibold font-poppins text-4xl text-black">
          {t("Get Our Updates")}
        </h3>
        <p className="mt-4 font-normal font-montserrat text-xl text-black mb-8">
          {t(
            "Browse our wide selection of electronics and find the perfect promo for you from newsletter."
          )}
        </p>
        <Input
          placeholder="Enter your email address ..."
          className=" !px-6 h-14"
        />
        <CommonButton className="!bg-orange !mt-[16px] !px-8 !h-12 !border-none rounded-[10px]">
          <span className="font-bold font-montserrat text-lg text-white">
            {t("Subscribe")}
          </span>
        </CommonButton>
      </div>
    </>
  );
};

export default SubscribeForm;
