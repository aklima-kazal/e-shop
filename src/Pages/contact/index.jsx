import React from "react";
import Container from "../../globalcomponents/Container";
import { FaBus } from "react-icons/fa6";
import { CiApple } from "react-icons/ci";
import { FaAppleAlt } from "react-icons/fa";
import { IoIosMan } from "react-icons/io";
import { IoWomanSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="w-full flex mt-24 ">
      <Container className="flex-row flex items-center justify-center">
        <h1 className=" gap-x-12 text-9xl w-2xl bg-blue-400 text-red items-center justify-center flex font-extrabold pt-7 pb-7">
          FRUIT
          <FaAppleAlt />
        </h1>
        <h1 className=" gap-x-12 text-9xl w-2xl bg-yellow text-pink-600 items-center justify-center flex font-extrabold pt-7 pb-7">
          CAR
          <FaBus color="red" />
        </h1>
        <h1 className=" gap-x-12 text-9xl w-2xl bg-red text-purple-600 items-center justify-center flex font-extrabold pt-7 pb-7">
          NIAM
          <IoIosMan color="violet" />
        </h1>
        <h1 className=" gap-x-12 text-9xl w-2xl bg-purple-400 text-purple-950 items-center justify-center flex font-extrabold pt-7 pb-7">
          OHEE
          <IoWomanSharp color="#283b8" />
        </h1>
      </Container>
    </div>
  );
};

export default Contact;
