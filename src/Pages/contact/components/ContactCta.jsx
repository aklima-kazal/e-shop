import { useTranslation } from "react-i18next";
import CommonButton from "../../../globalcomponents/CommonButton";
import SubscribeImg from "../../../../src/assets/Images/subscribeimg.png";

const ContactCta = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className="mt-[8px] lg:mt-[8px] px-10">
        <div className="bg-linear-to-r from-white02 to-gray rounded-[25px] grid grid-cols-1 xl:grid-cols-[2fr_3fr] ">
          <div className="py-2 lg:py-[80px] pl-8 px-6 xl:pl-[100px] ">
            <h3 className="font-semibold font-poppins text-3xl lg:text-4xl text-black mb-6">
              Get Up-to-Date Gadget Technology
            </h3>
            <p className="font-normal font-montserrat text-xl text-black mb-8">
              Browse our wide selection of electronics and find the perfect
              promo for you from newsletter.
            </p>

            <CommonButton className="!bg-orange !mt-[16px] !px-8 !h-12 !border-none rounded-[10px] !mx-[25%] lg:!mx-[40px] xl:!mx-0">
              <span className="font-bold font-montserrat text-lg text-white">
                {t("Subscribe")}
              </span>
            </CommonButton>
          </div>
          <div className="  xl:pl-[100px]  xl:block hidden">
            <img
              src={SubscribeImg}
              alt="subscribe"
              className=" xl:w-[70%] 2xl:w-[85%] max-h-[700px]  mt-[80px] 2xl:mt-0 ml-10 2xl:ml-[140px] lg:flex items-center justify-center"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactCta;
