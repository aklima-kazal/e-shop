import React from "react";
import { Helmet } from "react-helmet";
import Container from "../../globalcomponents/Container";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <h1 className="">this is my home page</h1>
      </Container>
    </>
  );
};

export default Home;
