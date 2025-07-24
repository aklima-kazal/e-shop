import { BsHeadphones } from "react-icons/bs";
import { FaCameraRetro, FaMobileScreen, FaPlaystation } from "react-icons/fa6";
import { HiHomeModern } from "react-icons/hi2";
import { MdComputer, MdOutlineTv } from "react-icons/md";
import { SlCamera } from "react-icons/sl";
import { Link } from "react-router-dom";

export const BlogData = [
  {
    label: (
      <Link
        to="/product"
        className=" text-[16px] font-normal text-white font-montserrat"
      >
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
        to="/product"
        className=" text-[16px] font-normal text-white font-montserrat"
      >
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
        className=" text-[16px] font-normal text-white font-montserrat"
      >
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
        className=" text-[16px] font-normal text-white font-montserrat"
      >
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
        className=" text-[16px] font-normal text-white font-montserrat"
      >
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
        className=" text-[16px] font-normal text-white font-montserrat"
      >
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
        className=" text-[16px] font-normal text-white font-montserrat"
      >
        Home Appliances
      </Link>
    ),
    key: "7",
  },
];
