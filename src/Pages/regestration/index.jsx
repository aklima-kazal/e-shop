import React from "react";
import Container from "../../globalcomponents/Container";
import RegestrationForm from "./components/RegestrationForm";
import { Helmet } from "react-helmet-async";

const Regestration = () => {
  return (
    <>
      <div className="mt-[80px] px-10">
        <Container>
          <div className="max-w-[600px] mx-auto">
            <Helmet>
              <title>signup</title>
            </Helmet>
            <h4 className="font-bold font-poppins text-[56px] text-black text-center">
              Register
            </h4>
            <div>
              <RegestrationForm />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Regestration;
