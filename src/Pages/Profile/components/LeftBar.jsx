import React from "react";
import { OrderIcon } from "../../../assets/svg/Order";
import { IoWalletOutline } from "react-icons/io5";
import { PiShoppingCartThin } from "react-icons/pi";
import { RxHome } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";

const LeftBar = ({ setOptions }) => {
  return (
    <>
      <div className="bg-white border border-white01 p-8 rounded-[24px] ">
        <div className="text-center border-b border-gray pb-12">
          <div className="w-[252px] h-[252px] bg-white03 border border-white01 rounded-full mx-auto"></div>
          <h4 className="text-2xl font-semibold text-black font-poppins text-center mt-4">
            Amelia Robert
          </h4>
          <p className="text-sm font-normal text-gray font-montserrat text-center mt-1 ">
            amelia.watson@eshop.com
          </p>
        </div>
        <div className="mt-12">
          <ul>
            <li
              onClick={() => setOptions(1)}
              className="flex items-center gap-x-4 mb-6 cursor-pointer hover:text-orange"
            >
              <OrderIcon />
              <span className="font-bold text-black font-montserrat text-base hover:text-orange">
                Orders
              </span>
            </li>
            <li
              onClick={() => setOptions(2)}
              className="flex items-center gap-x-4 mb-6 cursor-pointer hover:text-orange"
            >
              <IoWalletOutline size={28} />
              <span className="font-bold text-black font-montserrat text-base hover:text-orange">
                Wallet
              </span>
            </li>
            <li
              onClick={() => setOptions(3)}
              className="flex items-center gap-x-4 mb-6 cursor-pointer hover:text-orange"
            >
              <PiShoppingCartThin size={28} />
              <span className="font-bold text-black font-montserrat text-base hover:text-orange">
                Cart
              </span>
            </li>
            <li
              onClick={() => setOptions(4)}
              className="flex items-center gap-x-4 mb-6 cursor-pointer hover:text-orange"
            >
              <RxHome size={28} />
              <span className="font-bold text-black font-montserrat text-base hover:text-orange">
                Address
              </span>
            </li>
            <li
              onClick={() => setOptions(5)}
              className="flex items-center gap-x-4 mb-6 cursor-pointer hover:text-orange"
            >
              <VscAccount size={28} />
              <span className="font-bold text-black font-montserrat text-base hover:text-orange">
                Account Details
              </span>
            </li>
            <li className="flex items-center gap-x-4 mb-6 cursor-pointer hover:text-orange">
              <IoIosLogOut size={28} />
              <span className="font-bold text-black font-montserrat text-base hover:text-orange">
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
