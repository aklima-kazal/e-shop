import React from "react";
import Container from "../../../Container";
import NumberandAddress from "./NumberandAddress";
import SocialsWithLanguage from "./SocialsWithLanguage";

const TopBar = () => {
  return (
    <>
      <div className="border-b-2 border-white01 py-4 px-10">
        <Container>
          <div className="grid grid-cols-2 justify-between ">
            <div className="">
              <NumberandAddress />
            </div>
            <div>
              <SocialsWithLanguage />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
