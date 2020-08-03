import React from "react";
import PremiumSpaceFilter from "../components/Properties/PremiumSpaceFilter";
import PremiumSpace from "../components/PremiumSpace";
import styled from "styled-components";

const Properties = ({ properties }) => {
  return (
    <PropertiesWrapper>
      <section>
        {properties.map((property) => (
          <PremiumSpace key={property.id} property={property} />
        ))}
      </section>
      <PremiumSpaceFilter />
    </PropertiesWrapper>
  );
};

const PropertiesWrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export default Properties;
