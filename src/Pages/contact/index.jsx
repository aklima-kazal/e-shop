import React from "react";
import Container from "../../globalcomponents/Container";

import MapLocation from "./components/MapLocation";
import ContactBody from "./components/ContactBody";
import { Helmet } from "react-helmet-async";
import ContactCta from "./components/ContactCta";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Container>
        <MapLocation />
        <ContactBody />
        <ContactCta />
      </Container>
    </>
  );
};

export default Contact;
