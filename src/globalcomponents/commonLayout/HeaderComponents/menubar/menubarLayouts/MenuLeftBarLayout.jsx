import React from "react";
import AllCatagoryMenu from "../AllCatagories";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MenuLeftBarLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex items-center gap-x-8">
        <AllCatagoryMenu />
        <Link
          to="/product"
          className="text-[16px] font-bold text-white font-montserrat"
        >
          {t("Products")}
        </Link>
        <Link
          to="/blog"
          className="text-[16px] font-bold text-white font-montserrat"
        >
          {t("Blog")}
        </Link>

        <Link
          to="/contact"
          className="text-[16px] font-bold text-white font-montserrat"
        >
          {t("Contact")}
        </Link>
      </div>
    </>
  );
};

export default MenuLeftBarLayout;
