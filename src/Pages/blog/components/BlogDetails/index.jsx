import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TechTalksData } from "../../../home/components/techTalks/TechTalksData";
import BlogDetailsLeft from "./BlogDetailsLeft";
import BlogDetailsRight from "./BlogDetailsRight";
import RelatedBlogArticals from "./RelatedBlogArticals";
import Container from "../../../../globalcomponents/Container";
import { Button } from "antd";
import { PiClockFill } from "react-icons/pi";
import { RiUserFill } from "react-icons/ri";

const BlogDetails = () => {
  const [initialData, setInitialData] = useState(6);

  const loadMore = () => {
    setInitialData((prev) => prev + 6);
  };

  const { id } = useParams(); // Get blog id from route param

  //  Find the clicked blog
  const blog = TechTalksData.find((item) => String(item.id) === id);

  if (!blog) {
    return <div className="text-center py-20 text-red-500">Blog not found</div>;
  }

  // Filter related blogs by category
  const relatedArticals = TechTalksData.filter(
    (item) => item.catagory === blog.catagory && String(item.id) !== id
  );

  return (
    <>
      <Container>
        <div className="px-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-x-4 mt-[80px] mb-10">
            <Link
              className="text-[16px] font-normal !text-black hover:!text-orange font-montserrat"
              to="/"
            >
              Home
            </Link>
            <div className="h-[20px] w-[1px] bg-black flex items-center" />
            <span className="text-[16px] font-normal !text-black font-montserrat">
              {blog.catagory}
            </span>
            <div className="h-[20px] w-[1px] bg-black flex items-center" />
            <span className="text-[14px] lg:text-[16px] font-normal !text-black font-montserrat">
              {blog.title}
            </span>
          </div>

          {/* Blog details */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.8fr] gap-x-6">
            <BlogDetailsLeft blog={blog} />
            <BlogDetailsRight image={blog.image} />
          </div>

          {/* Related Articles Section */}
          {relatedArticals.length > 0 && (
            <div className="mt-16">
              <RelatedBlogArticals />

              {/*  Grid Layout for related blogs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticals?.slice(0, initialData).map((item) => (
                  <div
                    key={item.id}
                    className=" bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className=" h-80 w-full object-cover  overflow-hidden"
                    />
                    <div className="p-4">
                      <p className="text-sm text-white font-montserrat bg-orange py-1 px-2 inline-block rounded-lg">
                        {item.catagory}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold font-montserrat text-black ">
                        {item.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between p-4 mt-8">
                      <div className="flex items-center gap-x-2">
                        <RiUserFill size={20} color="#303030" />
                        <span>{item.postedBy}</span>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <PiClockFill color="#303030" size={20} />
                        <span className="font-montserrat font-normal text-[14px]">
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
      {initialData < relatedArticals?.length && (
        <div className="flex items-center justify-center">
          <Button
            onClick={loadMore}
            disabled={!relatedArticals || relatedArticals.length === 0}
            className="mt-10 !text-base !font-bold !font-montserrat !text-orange !px-[40px] !h-13 !border !border-orange !rounded-[10px]"
          >
            Load More
          </Button>
        </div>
      )}
    </>
  );
};

export default BlogDetails;
