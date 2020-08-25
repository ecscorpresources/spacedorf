import React, { Component } from "react";
import properties from "../../data/properties";
import styled from "styled-components";
import Spinner from "../Globals/Spinner";
import Agent from "../Agents/Agent";

class Agents extends Component {
  state = {
    properties: [],
  };

  componentDidMount() {
    this.setState({
      properties,
    });
  }

  render() {
    const agents = this.state.properties.map((property) => property.agent);
    console.log(agents);
    return (
      <>
        {this.state.properties.length === 0 ? (
          <Spinner />
        ) : (
          <PropertiesWrapper>
            <section>
              {this.state.properties.map((property) => (
                <Agent key={property.id} property={property} />
              ))}
            </section>
          </PropertiesWrapper>
        )}
      </>
    );
  }
}

const PropertiesWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export default Agents;
