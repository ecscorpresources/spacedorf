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
    return (
      <>
        {this.state.properties.length === 0 ? (
          <Spinner />
        ) : (
          <AgentsWrapper>
            {agents.map((agent, index) => (
              <Agent key={index} agent={agent} />
            ))}
          </AgentsWrapper>
        )}
      </>
    );
  }
}

const AgentsWrapper = styled.section`
  width: 75vw;
  margin: 10rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export default Agents;
