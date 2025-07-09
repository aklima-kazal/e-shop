import React from "react";
import Container from "../../globalcomponents/Container";

import MapLocation from "./components/MapLocation";
import ContactBody from "./components/ContactBody";
import { Helmet } from "react-helmet-async";
import Subscribe from "../home/components/Subscribe";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <MapLocation />
        <ContactBody />
        <Subscribe />
      </Container>
    </>
  );
};

export default Contact;
