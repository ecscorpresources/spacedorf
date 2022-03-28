import React, { Component } from "react";
import properties from "../../data/properties";
import styled from "styled-components";
import Spinner from "../Globals/Spinner";
import Agent from "../Agents/Agent";
import Pagination from "../Pagination/Pagination";

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
          <>
            <AgentsWrapper>
              {agents.slice(0, 4).map((agent, index) => (
                <Agent key={index} agent={agent} />
              ))}
            </AgentsWrapper>
            <div
              className="banner"
              style={{
                backgroundColor: "#f7f7f7",
                height: "20vh",
                width: "75%",
                margin: "0 auto",
              }}
            >
              {" "}
            </div>
            <AgentsWrapper>
              {agents.slice(4, 8).map((agent, index) => (
                <Agent key={index} agent={agent} />
              ))}
            </AgentsWrapper>
          </>
        )}
      </>
    );
  }
}

const AgentsWrapper = styled.section`
  width: 80vw;
  margin: 8rem auto 6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export default Agents;
