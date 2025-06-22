import React from "react";
import Container from "../../../Container";
import { Logo } from "../../../../assets/svg/Logo";
import SearchwithAuth from "./SearchwithAuth";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Container>
        <div className="grid grid-cols-2 items-center justify-between py-4 px-10">
          <Link to="/">
            <Logo />
          </Link>
          <div>
            <SearchwithAuth />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Navbar;
