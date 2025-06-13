import React from "react";
import Container from "../../globalcomponents/Container";
import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import SupportSection from "./components/support";
import FeaturedProducts from "./components/featuredProducts";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Container>
        <Banner />
        <SupportSection />
        <FeaturedProducts />
      </Container>
    </>
  );
};

export default Home;
