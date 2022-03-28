import React from "react";
import Properties from "../components/Properties/Properties";
import Hero from "../components/Globals/Hero";
import smallhero from "../assets/img/53.png";
import LocateAgent from "../components/Forms/LocateAgent";

const PropertyListing = () => {
  return (
    <>
      <Hero img={smallhero}>
        <LocateAgent text="Property Listings" />
      </Hero>

      <section>
        <Properties />
      </section>
    </>
  );
};

export default PropertyListing;
