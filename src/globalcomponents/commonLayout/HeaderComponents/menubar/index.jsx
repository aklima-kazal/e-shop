import React from "react";
import Container from "../../../Container";
import MenuLeftBarLayout from "./menubarLayouts/MenuLeftBarLayout";
import MenuRightBarLayout from "./menubarLayouts/MenuRightBarLayout";

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
