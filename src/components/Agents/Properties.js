import React, { Component } from "react";
import Hero from "../../components/Globals//Hero";
import smallhero from "../../assets/img/11.png";
import properties from "../../data/properties";
import styled from "styled-components";
import Spinner from "../Globals/Spinner";
import Property from "./Property";
import PropertyFilterForm from "../Forms/PropertyFilterForm";

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
    const name = this.props.match.params.name;
    const agentproperties = this.state.properties.filter(
      (properties) => properties.agent.agent.replace(/\s+/g, "") === name
    );

    console.log(agentproperties);
    return (
      <>
        <Hero img={smallhero}>
          <h1>Agent's Property</h1>
        </Hero>

        <section>
          {this.state.properties.length === 0 ? (
            <Spinner />
          ) : (
            <Wrapper>
              <section>
                {agentproperties.map((property) => (
                  <Property key={property.id} property={property} />
                ))}
              </section>
              <PropertyFilterForm />
            </Wrapper>
          )}
        </section>
      </>
    );
  }
}

const Wrapper = styled.section`
  width: 85vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export default Properties;
