import AllCatagoryMenu from "../../../../globalcomponents/commonLayout/HeaderComponents/menubar/AllCatagories";
import { FaBars } from "react-icons/fa";
import { IoGridOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {
  setGridView,
  setListView,
} from "../../../../service/redux/feature/viewSlice";

const Showcaseheader = () => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.view.mode);
  const { from, to, total } = useSelector((state) => state.pagination);
  return (
    <>
      <div className="mt-12 lg:mt-0 px-6">
        <h4 className="text-black font-semibold font-poppins text-[36px]">
          Products
        </h4>
        <p className="text-black font-montserrat font-normal text-[16px] mt-6 mb-4 lg:mb-0">
          Showing {from} - {to} of {total} results.
        </p>
        <div className="lg:flex lg:justify-end gap-x-6 lg:gap-x-4">
          <div className=" flex items-center justify-center gap-x-6 lg:gap-x-4 mb-6 lg:mb-0">
            <div className=" flex items-center justify-center gap-x-6 lg:gap-x-4 ">
              <span className="w-[50px] lg:w-[100px] font-normal font-montserrat text-xs lg:text-[16px] text-black">
                Sort by:
              </span>
              <div className="flex items-center lg:justify-end gap-x-2 lg:gap-x-4 w-[120px] lg:w-full">
                <AllCatagoryMenu
                  className=" w-full items-center font-montserrat font-bold text-xs lg:text-[16px] text-orange cursor-pointer flex justify-between gap-x-4"
                  icons={true}
                />
              </div>
            </div>
            <div className=" flex items-center lg:justify-end gap-x-2 lg:gap-x-4 w-0.5 h-6 lg:h-8 bg-white01" />
            <div className=" flex items-center lg:justify-end gap-x-2 lg:gap-x-4 lg:w-full">
              <AllCatagoryMenu
                className=" items-center font-montserrat font-bold text-xs lg:text-[16px] text-orange cursor-pointer flex justify-between lg:gap-x-4"
                icons={true}
              />
            </div>
            <div className="hidden lg:block gap-x-2 lg:gap-x-4 w-0.5 h-8 bg-white01" />
          </div>
          <div className="flex items-center gap-x-4 ">
            <div
              className={`hover:text-orange cursor-pointer border border-white01 hover:border-orange p-1 rounded-[5px] ${
                viewMode === "grid" ? "text-orange" : "text-black01"
              }`}
              onClick={() => dispatch(setGridView())}
            >
              <IoGridOutline size={24} />
            </div>
            <div
              className={`hover:text-orange cursor-pointer border border-white01 hover:border-orange p-1 rounded-[5px] ${
                viewMode === "list" ? "text-orange " : "text-black01"
              }`}
              onClick={() => dispatch(setListView())}
            >
              <FaBars size={24} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showcaseheader;
