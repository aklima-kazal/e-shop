import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import { FaOpencart } from "react-icons/fa6";
import { AiOutlineUser } from "react-icons/ai";

const SearchwithAuth = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center gap-x-4 w-full justify-between">
        <div className="flex items-center border-2 border-white01 px-[18px] py-[14px] rounded-lg max-w-[332px] min-w-[200px]">
          <input
            placeholder={t("Search_Products_...")}
            type="search"
            className="outline-none"
          />
          <IoIosSearch size={25} />
        </div>
        <div className="flex items-center gap-x-4">
          <div className="relative ">
            <FaOpencart size={28} />
            <span className="absolute bg-orange w-[6px] h-[6px] rounded-full  top-[-4px] right-0"></span>
          </div>
          <div>
            <h6 className="text-[16px] font-montserrat font-normal text-black">
              {t("cart")}
            </h6>
            <span className="text-[16px] font-montserrat font-bold text-black">
              $ 150,00
            </span>
          </div>
        </div>
        <div className="w-[1px] h-[32px] bg-white01"></div>
        <div>
          <div className="flex items-center gap-x-4">
            <div className=" ">
              <AiOutlineUser size={36} />
            </div>
            <div>
              <h6 className="text-[16px] font-montserrat font-normal text-black">
                {t("User")}
              </h6>
              <span className="text-[16px] font-montserrat font-bold text-black">
                {t("Account")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchwithAuth;
