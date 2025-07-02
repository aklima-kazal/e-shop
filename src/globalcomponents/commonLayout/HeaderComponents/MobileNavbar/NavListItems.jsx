import React from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineUser } from "react-icons/ai";
import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavListItems = () => {
  const { t } = useTranslation();
  return (
    <>
      <ul className="flex flex-col gap-y-4  ">
        <li>
          <Link
            to="/product"
            className="text-[16px] font-bold !text-black hover:!text-orange font-montserrat"
          >
            {t("Products")}
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className="text-[16px] font-bold !text-black hover:!text-orange font-montserrat"
          >
            {t("Blog")}
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-[16px] font-bold !text-black hover:!text-orange font-montserrat"
          >
            {t("Contact")}
          </Link>
        </li>
        <li className=" ">
          <Link
            to="/"
            className="text-[16px] font-bold !text-black hover:!text-orange font-montserrat"
          >
            {t("LIMITED_SALE")}
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-[16px] font-bold !text-black hover:!text-orange font-montserrat"
          >
            {t("Best_Seller")}
          </Link>
        </li>
        <li>
          <Link
            to="/"
            className="text-[16px] font-bold !text-black hover:!text-orange font-montserrat"
          >
            {t("New_Arrival")}
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-x-2 w-full justify-around mt-20">
        <div className="flex items-center gap-x-4">
          <div className="relative ">
            <FaOpencart size={22} />
            <span className="absolute bg-orange w-[6px] h-[6px] rounded-full  top-[-4px] right-0"></span>
          </div>
          <div>
            <h6 className="text-[16px] font-montserrat font-normal text-black">
              {t("cart")}
            </h6>
            <span className="text-[12px] font-montserrat font-bold text-black">
              $ 150,00
            </span>
          </div>
        </div>
        <div className="w-[1px] h-[32px] bg-white01"></div>
        <div>
          <div className="flex items-center gap-x-4">
            <div className=" ">
              <AiOutlineUser size={25} />
            </div>
            <div>
              <h6 className="text-[16px] font-montserrat font-normal text-black">
                {t("User")}
              </h6>
              <span className="text-[12px] font-montserrat font-bold text-black">
                {t("Account")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavListItems;
