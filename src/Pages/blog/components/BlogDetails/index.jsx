import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { TechTalksData } from "../../../home/components/techTalks/TechTalksData";
import BlogDetailsLeft from "./BlogDetailsLeft";
import BlogDetailsRight from "./BlogDetailsRight";
import RelatedBlogArticals from "./RelatedBlogArticals";
import Container from "../../../../globalcomponents/Container";
import { Button } from "antd";

const BlogDetails = () => {
  const [initialData, setInitialData] = useState(6);

  const loadMore = () => {
    setInitialData((prev) => prev + 6);
  };
  const { id } = useParams(); // ✅ Get blog id from route param

  // ✅ Find the clicked blog
  const blog = TechTalksData.find((item) => String(item.id) === id);

  if (!blog) {
    return <div className="text-center py-20 text-red-500">Blog not found</div>;
  }

  // ✅ Filter related blogs by category
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
              <h2 className="text-2xl font-bold font-montserrat text-black mb-6">
                Related Articles
              </h2>

              {/* ✅ Grid Layout for related blogs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticals?.slice(0, initialData).map((item) => (
                  <Link
                    to={`/blog/${item.id}`}
                    key={item.id}
                    className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className=" h-80 w-full object-cover group-hover:scale-105 transition-transform duration-300 overflow-hidden"
                    />
                    <div className="p-4">
                      <p className="text-sm text-gray-500 font-montserrat">
                        {item.catagory}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold font-montserrat text-black group-hover:text-orange">
                        {item.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
        {initialData < TechTalksData?.length && (
          <div className="flex items-center justify-center">
            <Button
              onClick={loadMore}
              className="mt-10 !text-base !font-bold !font-montserrat !text-orange !px-[40px] !h-13 !border !border-orange !rounded-[10px]"
            >
              Load More
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default BlogDetails;
