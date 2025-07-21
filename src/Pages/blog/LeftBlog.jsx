import { Input } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import AllCatagoryMenu from "../../globalcomponents/commonLayout/HeaderComponents/menubar/AllCatagories";

const LeftBlog = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="bg-orange p-6 w-full rounded-[10px] ">
          <h3 className="font-semibold font-poppins text-2xl text-white mb-4">
            Blog Search
          </h3>

          <div className="flex items-center border-2 border-white01 px-[18px] py-[10px] rounded-lg max-w-[332px] min-w-[200px] bg-white">
            <input
              placeholder={t("Search_Products_...")}
              type="search"
              className="outline-none bg-white"
            />
            <IoIosSearch size={25} />
          </div>
        </div>
        <div className="bg-black p-6 mt-5 h-[80vh]">
          <div className=" lg:w-[60%]">
            <AllCatagoryMenu
              className=" w-full items-center font-montserrat font-bold text-sm lg:text-[16px] text-orange cursor-pointer flex justify-between gap-x-4"
              icons={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBlog;
