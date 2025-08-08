import React, { use, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { CgArrowLongRight } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import BlogCard from "../../../globalcomponents/blogCard";
import { TechTalksData } from "../../home/components/techTalks/TechTalksData";
import { setRange } from "../../../service/redux/feature/paginationSlice";
import { useDispatch } from "react-redux";
import CustomPagination from "../../../globalcomponents/CustomPagination";

const RightBlog = () => {
  const { pathname } = useLocation();
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const StartIndex = (page - 1) * pageSize;
  const EndIndex = StartIndex + pageSize;
  const paginatedProducts = TechTalksData.slice(StartIndex, EndIndex);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(
      setRange({
        from: StartIndex + 1,
        to: Math.min(EndIndex, TechTalksData.length),
        total: TechTalksData.length,
      })
    );
  }, [page, dispatch]);

  return (
    <>
      <section className=" lg:px-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-6">
          {paginatedProducts?.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              pathname={pathname}
              {...blog}
            />
          ))}
        </div>
        {TechTalksData?.length > pageSize && (
          <div>
            <CustomPagination
              current={page}
              total={TechTalksData.length}
              onChange={setPage}
              pageSize={pageSize}
            />
          </div>
        )}
      </section>
    </>
  );
};

export default RightBlog;
