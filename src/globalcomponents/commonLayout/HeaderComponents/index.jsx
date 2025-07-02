import React from "react";
import TopBar from "./TopBar";
import Navbar from "./Navbar";
import Menubar from "./menubar";
import MobileNavbar from "./MobileNavbar";

const HeaderComponents = () => {
  return (
    <>
      <div className="hidden lg:block">
        <TopBar />
        <Navbar />
        <Menubar />
      </div>
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
    </>
  );
};

export default HeaderComponents;
