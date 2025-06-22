import React from "react";
import AllCatagoryMenu from "../AllCatagories";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "../../../../Container";

const MenuLeftBarLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <div className="flex gap-x-8 items-center justify-start ">
          <AllCatagoryMenu
            isMenu={true}
            className="font-montserrat font-bold text-[16px] text-white cursor-pointer flex items-center gap-x-4"
          />
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
      </Container>
    </>
  );
};

export default MenuLeftBarLayout;
