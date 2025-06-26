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
      <section className="px-10 mt-20">
        <div className="flex justify-between mt-[80px] mb-10">
          <div>
            <h3 className="text-[36px] font-semibold text-black font-poppins ">
              {t("Tech Talk")}
            </h3>
            <p className="text-[20px] font-normal text-black font-montserrat">
              Stay up to date with the latest trends, reviews, and insights from
              our experts.
            </p>
          </div>

          <Link
            to="/product"
            className="flex items-center gap-x-2 font-bold font-montserrat text-[16px] text-orange group self-end"
          >
            {t("View_All")}
            <span className="group-hover:translate-x-2 transition-transform duration-300">
              <CgArrowLongRight size={30} />
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-10">
          {TechTalksData?.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} pathname={pathname} {...blog} />
          ))}
        </div>
      </section>
    </>
  );
};

export default TechTalks;
