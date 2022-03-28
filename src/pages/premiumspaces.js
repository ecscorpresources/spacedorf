import React from "react";
import PremiumSpaces from "../components/PremiumSpace/PremiumSpaces";
import styled from "styled-components";
import Hero from "../components/Globals/Hero";
import smallhero from "../assets/img/53.png";
import LocateAgent from "../components/Forms/LocateAgent";

const PropertyListing = () => {
  return (
    <>
      <Hero img={smallhero}>
        <LocateAgent text="Get an Event Space" />
      </Hero>
      <SectionWrapper>
        <PremiumSpaces />
      </SectionWrapper>
    </>
  );
};

const SectionWrapper = styled.section`
  width: 85vw;
  margin: 4rem auto;

  .propertySecondSection {
    border-bottom: 2px solid #ddd;
    padding-bottom: 1rem;
    margin-bottom: 2rem;
    h1 {
      font-size: 25px;
    }
  }
`;

export default PropertyListing;
