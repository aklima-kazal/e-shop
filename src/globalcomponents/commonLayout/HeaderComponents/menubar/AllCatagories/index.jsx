import { Dropdown, Space } from "antd";
import { FaBars } from "react-icons/fa";
import { catagoriesItems } from "./catagoriesItems";
import { useTranslation } from "react-i18next";

const AllCatagoryMenu = () => {
  const { t } = useTranslation();
  return (
    <>
      <Dropdown menu={{ items: catagoriesItems }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()}>
          <Space className="font-montserrat font-bold text-[16px] text-white cursor-pointer">
            <FaBars /> {t("AllCatagory")}
          </Space>
        </a>
      </Dropdown>
    </>
  );
};

export default AllCatagoryMenu;
