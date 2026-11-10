import React from "react";
import Footer from "../../globalcomponents/commonLayout/Footer";
import Header from "../../globalcomponents/commonLayout/Header";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
