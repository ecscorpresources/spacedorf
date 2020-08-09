import React, { Component } from "react";
import PropertyFilterForm from "../components/Forms/PropertyFilterForm";
import Property from "../components/Property";
import { properties } from "../data/properties";
import styled from "styled-components";
import Spinner from "./Globals/Spinner";

class Properties extends Component {
  state = {
    properties: properties,
  };

  componentDidMount() {
    this.setState({ properties });
  }
  render() {
    return (
      <>
        {this.state.properties.length === 0 ? (
          <Spinner />
        ) : (
          <PropertiesWrapper>
            <section>
              {properties.map((property) => (
                <Property key={property.id} property={property} />
              ))}
            </section>
            <PropertyFilterForm />
          </PropertiesWrapper>
        )}
      </>
    );
  }
}

const PropertiesWrapper = styled.section`
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export default Properties;
