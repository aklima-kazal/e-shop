import React from "react";
import { Helmet } from "react-helmet-async";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";

const UserProfile = () => {
  return (
    <>
      <div>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div className="px-10 mt-[80px] ">
          <LeftBar />
          <RightBar />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
