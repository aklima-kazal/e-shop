import { useTranslation } from "react-i18next";
import { IoIosSearch } from "react-icons/io";
import { BlogData } from "../BlogData";

const BlogDetailsLeft = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-[90%] ">
        <div className="bg-orange p-6 rounded-[10px] items-center">
          <h3 className="font-semibold font-poppins text-2xl text-white mb-4">
            Blog Search
          </h3>

          <div className="flex items-center border-2 border-white01 px-[18px] py-[10px] rounded-lg max-w-[332px] min-w-[200px] bg-white">
            <input
              placeholder={t("Search_Products_...")}
              type="search"
              className="outline-none bg-white"
            />
            <IoIosSearch size={25} />
          </div>
        </div>
        <div className="bg-black p-6 mt-5  items-center rounded-[10px] ">
          {BlogData?.map((blog) => (
            <h3
              key={blog.key}
              className=" cursor-pointer border-b border-white01"
            >
              {blog.label}
            </h3>
          ))}
        </div>
        <div className="bg-white02 p-8 mt-5 items-center rounded-[10px] ">
          <h4 className="font-semibold font-poppins text-2xl text-black mb-4">
            Tags
          </h4>
          <ul className="flex flex-wrap gap-y-2 gap-x-2">
            <li className=" bg-white text-sm font-normal font-montserrat text-black p-2 rounded-[5px]">
              Tech
            </li>

            <li className=" bg-white text-sm font-normal font-montserrat text-black p-2 rounded-[5px]">
              Trends
            </li>

            <li className=" bg-white text-sm font-normal font-montserrat text-black p-2 rounded-[5px]">
              Innovation
            </li>

            <li className=" bg-white text-sm font-normal font-montserrat text-black p-2 rounded-[5px]">
              Tips
            </li>

            <li className=" bg-white text-sm font-normal font-montserrat text-black p-2 rounded-[5px]">
              Gadget
            </li>

            <li className=" bg-white text-sm font-normal font-montserrat text-black p-2 rounded-[5px]">
              Guide
            </li>

            <li className=" bg-white text-sm font-normal font-montserrat text-black p-2 rounded-[5px]">
              Gadget Review
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsLeft;
