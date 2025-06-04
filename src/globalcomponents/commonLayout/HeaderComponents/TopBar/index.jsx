import React from "react";
import Container from "../../../Container";
import NumberandAddress from "./NumberandAddress";

const TopBar = () => {
  return (
    <>
      <div className="border-b-2 border-white01 p-3">
        <Container>
          <div className="grid grid-cols-2 justify-between">
            <div className="">
              <NumberandAddress />
            </div>
            <div>right</div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
