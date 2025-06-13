import React from "react";
import { Select } from "antd";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import i18n from "../../../../service/i18";

const SocialsWithLanguage = () => {
  const currencyOtions = [
    { value: "USD", label: "USD" },
    { value: "TAKA", label: "TAKA" },
  ];
  const countryOtionsWithFlag = [
    {
      value: "us",
      language: "en",
      label: (
        <div className="flex items-center gap-x-4">
          <img
            src="https://flagcdn.com/us.svg"
            alt="flag"
            className="w-[25px] h-[20px] "
          />
          <span>English</span>
        </div>
      ),
    },
    {
      value: "bd",
      language: "bd",
      label: (
        <div className="flex items-center gap-x-4">
          <img
            src="https://flagcdn.com/bd.svg"
            alt="flag"
            className="w-[25px] h-[20px] "
          />
          <span>Bangla</span>
        </div>
      ),
    },
  ];
  const handleLanguageChange = (value) => {
    const findLanguage = countryOtionsWithFlag.find(
      (language) => language.value === value
    );
    if (findLanguage) {
      i18n.changeLanguage(findLanguage.language || "en");
    }
  };
  return (
    <>
      <div className="flex items-center justify-end gap-8 w-full">
        <div>
          <Select
            defaultValue={currencyOtions[0].value}
            style={{ width: 100 }}
            onChange={() => {}}
            options={currencyOtions}
            className="custom-select"
          />
        </div>

        <div className="w-[1px] h-[32px] bg-white01"></div>
        <div>
          <Select
            defaultValue={countryOtionsWithFlag[0].value}
            style={{ width: 120 }}
            onChange={handleLanguageChange}
            options={countryOtionsWithFlag}
            className="custom-select"
          />
        </div>

        <div className="w-[1px] h-[32px] bg-white01"></div>
        <div className="flex items-center gap-4">
          <Link to="facebook.com">
            <FaFacebookF color="#303030" />
          </Link>
          <Link to="twitter.com">
            <IoLogoTwitter color="#303030" />
          </Link>
          <Link to="instagram.com">
            <FaInstagram color="#303030" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialsWithLanguage;
