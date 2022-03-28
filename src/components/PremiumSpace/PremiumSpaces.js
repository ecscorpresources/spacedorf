import React, { Component } from "react";
import PremiumSpaceFilter from "../Forms/PremiumSpaceFilter";
import PremiumSpace from "../PremiumSpace/PremiumSpace";
import properties from "../../data/eventcenters";
import styled from "styled-components";
import Spinner from "../Globals/Spinner";
import Pagination from "../Pagination/Pagination";
import PropertyFilterForm from "../Forms/PropertyFilterForm";
import SearchFilter from "../Forms/SearchFilter";
import data from "../../data/searchFilterPremium";

class Properties extends Component {
  state = {
    properties: [],
  };

  componentDidMount() {
    this.setState({
      properties,
    });
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
                {this.state.properties.map((property) => (
                  <PremiumSpace key={property.id} property={property} />
                ))}
              </section>
              <section>
                <PropertyFilterForm />
                <PropertyFilterForm />
              </section>
            </PropertiesWrapper>
            <Pagination />
          </>
        )}
      </>
    );
  }
}

const PropertiesWrapper = styled.section`
  display: grid;
  width: 80vw;
  margin: 4rem auto;
  grid-template-columns: 3fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export default Properties;
