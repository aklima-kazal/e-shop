import React from "react";
import { PiClockFill } from "react-icons/pi";

const BlogCard = ({ pathname, ...props }) => {
  const { image, title, catagory, date } = props;
  const isHomePage = pathname === "/";
  const HomePageCard = () =>
    isHomePage && (
      <>
        <div className="border border-transparent  hover:border-white01 transition-all ease-in duration-300 hover:p-[20px] lg:hover:p-[30px] hover:rounded-[25px]">
          <div className="max-h-[406px] bg-pink-400 overflow-hidden rounded-[25px]">
            <img
              src={image}
              alt="blogimg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8">
            <h4 className="text-[20px] lg:text-[24px] font-semibold text-black font-poppins ">
              {title}
            </h4>
            <div className="flex items-center justify-between mt-8">
              <div className="py-1 px-3 bg-orange rounded-[10px]">
                <span className="text-[16px] font-bold text-white">
                  {catagory}
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <PiClockFill color="#303030" size={20} />
                <span className="font-montserrat font-normal text-[14px]">
                  {date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  return (
    <>
      <HomePageCard />
    </>
  );
};

export default BlogCard;
