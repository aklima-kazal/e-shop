import React from "react";
import Container from "../../globalcomponents/Container";
import { Helmet } from "react-helmet-async";
import Banner from "./components/Banner";
import SupportSection from "./components/support";
import FeaturedProducts from "./components/featuredProducts";
import Overview from "./components/Overview";
import NewProducts from "./components/newProducts";
import SpringSale from "./components/springsale";

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
        <Overview />
        <NewProducts />
      </Container>
      <SpringSale />
    </>
  );
};

export default Home;
