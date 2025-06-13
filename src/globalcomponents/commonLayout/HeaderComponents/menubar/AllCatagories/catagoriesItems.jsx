import { BsHeadphones } from "react-icons/bs";
import { FaCameraRetro, FaMobileScreen, FaPlaystation } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { MdComputer, MdOutlineTv } from "react-icons/md";
import { SlCamera } from "react-icons/sl";
import { Link } from "react-router-dom";

export const catagoriesItems = [
  {
    label: (
      <Link
        to="/product"
        className="flex items-center gap-x-2 text-[16px] font-normal text-white font-montserrat"
      >
        <MdComputer color="#FF624C" />
        Computers & Tablets
      </Link>
    ),
    key: "0",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product "
        className="flex items-center gap-x-2 text-[16px] font-normal text-white font-montserrat"
      >
        <FaMobileScreen color="#FF624C" />
        Mobile & Accessories
      </Link>
    ),
    key: "1",
  },
  {
    type: "divider",
  },

  {
    label: (
      <Link
        to="/product"
        className="flex items-center gap-x-2 text-[16px] font-normal text-white font-montserrat"
      >
        <MdOutlineTv color="#FF624C" />
        TV & Home Theater
      </Link>
    ),
    key: "3",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="flex items-center gap-x-2 text-[16px] font-normal text-white font-montserrat"
      >
        <BsHeadphones color="#FF624C" />
        Audio & Headphones
      </Link>
    ),
    key: "4",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="flex items-center gap-x-2 text-[16px] font-normal text-white font-montserrat"
      >
        <SlCamera color="#FF624C" />
        Cameras & Camcorders
      </Link>
    ),
    key: "5",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="flex items-center gap-x-2 text-[16px] font-normal text-white font-montserrat"
      >
        <FaPlaystation color="#FF624C" />
        Gaming Equipment
      </Link>
    ),
    key: "6",
  },
  {
    type: "divider",
  },
  {
    label: (
      <Link
        to="/product"
        className="flex items-center gap-x-2 text-[16px] font-normal text-white font-montserrat"
      >
        <HiHomeModern color="#FF624C" />
        Home Appliances
      </Link>
    ),
    key: "7",
  },
  {
    type: "divider",
  },
];
