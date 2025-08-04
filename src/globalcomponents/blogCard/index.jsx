import { PiClockFill } from "react-icons/pi";
import { RiUserFill } from "react-icons/ri";

import Blog from "../../Pages/blog";
import { Link } from "react-router-dom";

const BlogCard = ({ pathname, ...props }) => {
  const { image, title, catagory, date, postedBy, id } = props;
  const isHomePage = pathname === "/";
  const HomePageCard = () =>
    isHomePage && (
      <>
        <div className="border border-transparent  hover:border-white01 transition-all ease-in duration-300 hover:p-[20px] lg:hover:p-[30px] hover:rounded-[25px]">
          <div className="max-h-[406px] overflow-hidden rounded-[25px]">
            <img
              src={image}
              alt="blogimg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8">
            <Link
              to={`/blog/${id}`}
              className="text-[20px] lg:text-[24px] font-semibold text-black font-poppins "
            >
              {title}
            </Link>
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
  const BlogPageCard = () =>
    !isHomePage && (
      <>
        <div className="border border-transparent p-6 hover:border-white01 transition-all ease-in duration-300 hover:rounded-[25px]">
          <div className="max-h-[406px] overflow-hidden rounded-[25px] relative">
            <div className="py-1 px-3 bg-orange rounded-[10px] absolute top-4 left-4 text-white text-base font-bold font-montserrat">
              {catagory}
            </div>
            <img
              src={image}
              alt="blogimg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-8">
            <Link
              to={`/blog/${id}`}
              className="text-[20px] lg:text-[24px] font-semibold text-black font-poppins "
            >
              {title}
            </Link>
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-x-2">
                <RiUserFill size={20} color="#303030" />
                <span>{postedBy}</span>
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
      <BlogPageCard />
    </>
  );
};

export default BlogCard;
