import React from "react";
import Properties from "../components/Properties/Properties";
import Hero from "../components/Globals/Hero";
import smallhero from "../assets/img/11.png";

const PropertyListing = () => {
  return (
    <>
      <Hero img={smallhero}>
        <h1>Property Listing</h1>
      </Hero>

      <section>
        <Properties />
      </section>
    </>
  );
};

export default PropertyListing;
