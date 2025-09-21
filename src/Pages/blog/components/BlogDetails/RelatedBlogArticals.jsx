import React from "react";
import BlogCard from "../../../../globalcomponents/blogCard";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { CgArrowLongRight } from "react-icons/cg";

const RelatedBlogArticals = () => {
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="flex items-center justify-between mb-10 mt-[80px] md:mt-0">
          <h3 className="text-[24px] md:text-[36px] font-semibold text-black font-poppins ">
            {t("Related Articals")}
          </h3>

          <Link
            to="/product"
            className="flex items-center gap-x-2 font-bold font-montserrat text-sm lg:text-[16px] text-orange group"
          >
            {t("View_All")}
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <CgArrowLongRight size={30} />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RelatedBlogArticals;
