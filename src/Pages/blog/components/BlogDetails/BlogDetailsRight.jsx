import React from "react";

const BlogDetailsRight = ({ image }) => {
  return (
    <>
      <div className="mt-[50px] lg:mt-0">
        <h4 className="font-bold font-poppins text-2xl md:text-[32px] lg:text-[56px] text-black  md:w-[70%] leading-[40px] lg:leading-[60px] mb-10">
          The Latest Tech Trends You Need to Know About
        </h4>
        <img
          src={image}
          alt="blogimg"
          className="md:w-[80%] md:h-[60%] object-cover rounded-3xl"
        />
      </div>
    </>
  );
};

export default BlogDetailsRight;
