import React from "react";
import Properties from "../components/Properties";
import styled from "styled-components";
import Hero from "../components/Globals/Hero";
import smallhero from "../assets/img/11.png";

const PropertyListing = () => {
  return (
    <>
      <Hero img={smallhero}>
        <h1>Property Listing</h1>
      </Hero>

      <SectionWrapper>
        <article className="propertySecondSection">
          <h1>Search Results</h1>
        </article>
        <Properties />
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
