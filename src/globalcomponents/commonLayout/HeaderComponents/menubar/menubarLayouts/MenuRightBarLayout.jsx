import { t } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../../../../Container";

const MenuRightBarLayout = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <div className="flex items-center gap-x-8 justify-end">
          <Link
            to="/"
            className="text-[16px] font-bold text-white font-montserrat"
          >
            {t("LIMITED_SALE")} 👋🏻
          </Link>
          <Link
            to="/"
            className="text-[16px] font-bold text-white font-montserrat"
          >
            {t("Best_Seller")}
          </Link>
          <Link
            to="/"
            className="text-[16px] font-bold text-white font-montserrat"
          >
            {t("New_Arrival")}
          </Link>
        </div>
      </Container>
    </>
  );
};

export default MenuRightBarLayout;
