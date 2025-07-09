import { Dropdown, Space } from "antd";
import { FaBars } from "react-icons/fa";
import { catagoriesItems } from "./catagoriesItems";
import { useTranslation } from "react-i18next";
import Container from "../../../../Container";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

const AllCatagoryMenu = ({ isMenu, className, icons, content }) => {
  const { t } = useTranslation();
  return (
    <>
      <Dropdown menu={{ items: catagoriesItems }} trigger={["click"]}>
        <div className={className}>
          {isMenu && <FaBars />}
          {t("AllCatagory")}
          {icons && (
            <span>
              <RiArrowDownSLine
                size={24}
                className="text-black  cursor-pointer"
              />
            </span>
          )}
        </div>
      </Dropdown>
    </>
  );
};

export default AllCatagoryMenu;
