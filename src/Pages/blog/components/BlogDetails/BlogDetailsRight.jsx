import React from "react";

const BlogDetailsRight = ({ image, title }) => {
  return (
    <>
      <div>
        <h4 className="font-bold font-poppins text-[56px] text-black w-[70%] leading-[60px] mb-10">
          The Latest Tech Trends You Need to Know About
        </h4>
        <img
          src={image}
          alt="blogimg"
          className="w-[80%] h-[60%] object-cover rounded-3xl"
        />
      </div>
    </>
  );
};

export default BlogDetailsRight;
