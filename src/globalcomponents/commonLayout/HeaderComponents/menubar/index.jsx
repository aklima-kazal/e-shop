import React from "react";
import Container from "../../../Container";
import MenuLeftBarLayout from "./menubarLayouts/menuleftbarLayout";
import MenuRightBarLayout from "./menubarLayouts/menurightbarLayout";

const Menubar = () => {
  return (
    <>
      <div className="bg-orange py-6">
        <Container>
          <div className="grid grid-cols-2 items-center justify-between">
            <div>
              <MenuLeftBarLayout />
            </div>
            <div>
              <MenuRightBarLayout />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Menubar;
