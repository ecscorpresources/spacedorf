import React, { Component } from "react";
import PremiumSpaceFilter from "../components/Forms/PremiumSpaceFilter";
import PremiumSpace from "../components/PremiumSpace";
import properties from "../data/eventcenters";
import styled from "styled-components";
import Spinner from "./Globals/Spinner";

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
    const premiumspaces = this.state.properties.filter(
      (property) => property.premiumspace === true
    );
    return (
      <>
        {this.state.properties.length === 0 ? (
          <Spinner />
        ) : (
          <PropertiesWrapper>
            <section>
              {premiumspaces.map((property) => (
                <PremiumSpace key={property.id} property={property} />
              ))}
            </section>
            <PremiumSpaceFilter />
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
