import React from "react";
import "../styles/properties.scss";
import properties from "../data/propertylisting";
import Properties from "../components/Properties";
import styled from "styled-components";

const PropertyListing = () => {
  return (
    <>
      <section className="propertyFirstSection">
        <h1>Property Listing</h1>
      </section>
      <SectionWrapper>
        <article className="propertySecondSection">
          <h1>Search Results</h1>
        </article>
        <Properties properties={properties} />
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
