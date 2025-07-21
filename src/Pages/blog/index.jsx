import React, { use } from "react";
import { useTranslation } from "react-i18next";
import { CgArrowLongRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";

import BlogCard from "../../globalcomponents/blogCard";
import { TechTalksData } from "../home/components/techTalks/TechTalksData";
import LeftBlog from "./LeftBlog";
import RightBlog from "./RightBlog";

const Blog = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  const pageName = pathname.split("/").slice(1)[0];
  return (
    <>
      <section className="px-10 mt-10 lg:mt-20">
        <div className="flex justify-between mt-[80px] mb-10 ">
          <div className="w-[70%] lg:w-fit">
            <h3 className="text-2xl md:text-[36px] font-semibold text-black font-poppins ">
              {t("Tech Talk Blog")}
            </h3>
            <h4 className=" gap-x-2 flex mt-6 items-center mb-4 font-montserrat font-normal text-[16px] text-black">
              <Link to="/" className="hover:text-orange">
                Home
              </Link>
              |
              <span className="text-black font-bold font-montserrat text-[16px] capitalize">
                {pageName}
              </span>
            </h4>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-4 gap-y-10 lg:gap-y-0 mt-12">
          {TechTalksData?.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} pathname={pathname} {...blog} />
          ))}
          <div className="grid grid-cols-[2fr_2fr] gap-x-10">
            <div>
              <LeftBlog />
            </div>
            <div>
              <RightBlog />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
