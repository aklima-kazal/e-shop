import React, { use } from "react";
import { useTranslation } from "react-i18next";
import { CgArrowLongRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import BlogCard from "../../../../globalcomponents/blogCard";
import { TechTalksData } from "./TechTalksData";

const TechTalks = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  return (
    <>
      <section className="px-10 mt-10 lg:mt-20">
        <div className="flex justify-between mt-[80px] mb-10 ">
          <div className="w-[70%] lg:w-fit">
            <h3 className="text-2xl md:text-[36px] font-semibold text-black font-poppins ">
              {t("Tech Talk")}
            </h3>
            <p className="text-[14px] md:text-[20px] font-normal text-black font-montserrat">
              Stay up to date with the latest trends, reviews, and insights from
              our experts.
            </p>
          </div>

          <Link
            to="/product"
            className="flex items-center gap-x-2 font-bold font-montserrat text-sm md:text-[16px] text-orange group self-end"
          >
            {t("View_All")}
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <CgArrowLongRight size={30} />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-4 gap-y-10 lg:gap-y-0 mt-12">
          {TechTalksData?.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} pathname={pathname} {...blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TechTalks;
