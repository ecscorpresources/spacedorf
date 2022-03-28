import React, { Component } from "react";
import styled from "styled-components";

import PropertyFilterForm from "../Forms/PropertyFilterForm";
import Property from "../Properties/Property";
import properties from "../../data/properties";
import Spinner from "../Globals/Spinner";
import Pagination from "../Pagination/Pagination";
import SearchFilter from "../Forms/SearchFilter";
import data from "../../data/searchFilterProperties";

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
          <>
            <SearchFilter data={data} />
            <PropertiesWrapper>
              <section>
                {properties.map((property) => (
                  <Property key={property.id} property={property} />
                ))}
              </section>
              <section>
                <PropertyFilterForm />
                <PropertyFilterForm />
              </section>
            </PropertiesWrapper>
          </>
        )}
      </>
    );
  }
}

const PropertiesWrapper = styled.section`
  width: 80vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`;

export default Properties;
