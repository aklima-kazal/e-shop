import React from "react";
import { Link, useLocation } from "react-router-dom";
import { featuredData } from "../../../home/components/featuredProducts/featuredData";
import { TechTalksData } from "../../../home/components/techTalks/TechTalksData";
import BlogDetailsLeft from "./BlogDetailsLeft";
import BlogDetailsRight from "./BlogDetailsRight";
import RelatedBlogArticals from "./RelatedBlogArticals";
import Container from "../../../../globalcomponents/Container";

const BlogDetails = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(1)[0];

  const image = TechTalksData[0].image;
  const title = TechTalksData[0].title;
  const relatedArticals = TechTalksData.filter(
    (blog) => blog.title === title && blog.id !== id
  );

  return (
    <>
      <Container>
        <div className="px-10">
          <div className="flex items-center gap-x-4 mt-[80px] mb-10">
            <Link
              className="text-[16px] font-normal !text-black hover:!text-orange font-montserrat"
              to="/"
            >
              Home
            </Link>
            <div className="h-[20px] w-[1px] bg-black flex items-center" />
            <span className="text-[16px] font-normal !text-black  font-montserrat">
              {id}
            </span>
            <div className="h-[20px] w-[1px] bg-black flex items-center" />
            <span className="text-[14px] lg:text-[16px] font-normal !text-black  font-montserrat">
              {title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2.8fr] gap-x-2">
            <BlogDetailsLeft />
            <BlogDetailsRight image={image} />
          </div>
          <div className=" ">
            <RelatedBlogArticals relatedArticals={relatedArticals} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default BlogDetails;
