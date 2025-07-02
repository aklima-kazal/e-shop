import React, { useEffect, useState } from "react";
import Container from "../../../Container";
import { Link } from "react-router-dom";
import { Logo } from "../../../../assets/svg/Logo";
import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";
import CustomDrawer from "../../../Drawer";
import SocialsWithLanguage from "../TopBar/SocialsWithLanguage";
import NavListItems from "./NavListItems";

const MobileNavbar = () => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className="border-b border-white01 ">
        <Container>
          <div className="flex items-center justify-between py-4 gap-x-4 px-4">
            <Link to="/" className="cursor-pointer w-[20%]">
              <Logo width={70} />
            </Link>

            <div className="flex items-center border-2 border-white01 px-[8px] py-[8px] rounded-lg w-[50%]">
              <input
                placeholder={t("Search_Products_...")}
                type="search"
                className="outline-none w-[80%]"
              />
              <IoIosSearch size={25} color="#303030" />
            </div>
            <div
              className="w-[15%] flex items-center justify-end cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <FaHamburger size={23} color="#303030" />
            </div>
          </div>
        </Container>
      </div>
      <CustomDrawer
        title={
          <div>
            <SocialsWithLanguage />
          </div>
        }
        open={open}
        setOpen={setOpen}
        placement="left"
        closable="true"
        rootClassName="custom_drawer"
      >
        <NavListItems />
      </CustomDrawer>
    </>
  );
};

export default MobileNavbar;
