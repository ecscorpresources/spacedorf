import React from "react";
import PropertyFilterForm from "../components/Properties/PropertyFilterForm";
import Property from "../components/Property";
import styled from "styled-components";

const Properties = ({ properties }) => {
  return (
    <PropertiesWrapper>
      <section>
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </section>
      <PropertyFilterForm />
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
