import React, { use, useState } from "react";
import { Helmet } from "react-helmet-async";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import Container from "../../globalcomponents/Container";

const UserProfile = () => {
  const [options, setOptions] = useState();
  return (
    <>
      <div>
        <Helmet>
          <title>Profile</title>
        </Helmet>
        <div className="px-10 mt-[80px]">
          <Container>
            <div className=" grid grid-cols-[1fr_3.8fr] gap-x-20">
              <LeftBar setOptions={setOptions} />
              <RightBar options={options} />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
