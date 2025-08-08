import React from "react";
import Container from "../../../globalcomponents/Container";
import { Link } from "react-router-dom";
import { Logo } from "../../../assets/svg/Logo";
import { HiPhone } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { useTranslation } from "react-i18next";
import { FooterData } from "./footerData";
import visa from "../../../assets/Images/visa.png";
import masterCard from "../../../assets/Images/mastercard.png";
import Apple from "../../../assets/Images/apple.png";
import Paypal from "../../../assets/Images/paypal.png";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <Container>
        <footer className="px-10 mt-20 mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 h-full ">
            <div className="flex flex-col h-full justify-between">
              <Link to="/">
                <Logo />
              </Link>

              <div className="mt-8 mb-4 lg:mb-0">
                <ul>
                  <li className="flex items-center gap-x-4 mb-3">
                    <HiPhone size={20} color="#303030" />
                    <span className="font-normal text-sm lg:text-base text-black font-montserrat">
                      +1 (555) 123-4567
                    </span>
                  </li>
                  <li className="flex items-center gap-x-4 mb-3">
                    <IoIosMail size={20} color="#303030" />
                    <span className="font-normal text-sm lg:text-base text-black font-montserrat">
                      information@eshop.com
                    </span>
                  </li>
                  <li className="flex items-center gap-x-4">
                    <ImLocation size={20} color="#303030 " />
                    <span className="font-normal text-sm lg:text-base text-black font-montserrat">
                      123 Main Street, Suite 105, Anytown USA
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 xl:grid-cols-4 mt-4 lg:mt-0 gap-x-6">
              {FooterData?.map((item, index) => {
                const linkList = item.linkTitle;
                return (
                  <div key={index}>
                    <h4 className="text-[18px] lg:text-[20px] font-semibold text-black font-poppins">
                      {t(item.title)}
                    </h4>
                    {linkList?.map((data) => {
                      return (
                        <div key={data.linkTopic} className="mt-4">
                          <ul>
                            <li className="text-[14px] lg:text-[16px] font-montserrat font-normal text-black hover:text-orange transition-all ease-in duration-300">
                              <Link to={data.to}>{data.linkTopic}</Link>
                            </li>
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                );
              })}

              <div className="mt-6 xl:mt-0">
                <h4 className=" text-[18px] lg:text-[20px] font-semibold text-black font-poppins">
                  {t("Payments")}
                </h4>
                <div className="flex flex-wrap gap-y-4 gap-x-4 mt-6">
                  <img src={visa} alt="visa" />
                  <img src={masterCard} alt="masterCard" />
                  <img src={Apple} alt="Apple" />
                  <img src={Paypal} alt="Paypal" />
                </div>
                <div className="mt-[73px]">
                  <h4 className="text-[18px] lg:text-[20px] font-semibold text-black font-poppins">
                    Follow Us
                  </h4>
                  <ul>
                    <li className="text-[14px] lg:text-[16px] font-montserrat font-normal text-black hover:text-orange transition-all ease-in duration-300 mt-4">
                      <Link to="">Twitter</Link>
                    </li>
                    <li className="text-[14px] lg:text-[16px] font-montserrat font-normal text-black hover:text-orange transition-all ease-in duration-300 mt-4">
                      <Link to="">Instagram</Link>
                    </li>
                    <li className="text-[14px] lg:text-[16px] font-montserrat font-normal text-black hover:text-orange transition-all ease-in duration-300 mt-4">
                      <Link to="">Facebook</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  items-center justify-between mt-12 border-t border-gray pt-6">
            <span className="text-[14px] font-montserrat font-normal text-black">
              Copyright © 2023 E-Shop. All Rights Reserved.
            </span>

            <div className="text-[14px] font-montserrat font-normal text-black gap-x-4 items-center flex">
              <Link to="">Privacy Policy </Link> |
              <Link to="">Terms & Condition</Link> | <Link to=""> Sitemap</Link>
            </div>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Footer;
