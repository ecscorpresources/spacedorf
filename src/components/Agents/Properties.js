import React, { Component } from "react";
import Hero from "../../components/Globals//Hero";
import smallhero from "../../assets/img/53.png";
import properties from "../../data/properties";
import styled from "styled-components";
import Spinner from "../Globals/Spinner";
import Property from "./Property";
import PropertyFilterForm from "../Forms/PropertyFilterForm";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <Container
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ height: "50vh", backgroundColor: "#1d9ed8" }}
      >
        <h1 className="mb-4" style={{ fontSize: "4rem" }}>
          OOPS!!! THE AGENT YOU ARE <br /> LOOKING FOR DOES NOT EXIST
        </h1>
        <Link to="/agents">VIEW AGENTS</Link>
      </Container>
    </>
  );
};

const Container = styled.section`
  h1 {
    color: #fff;
  }
  a {
    text-decoration: none;
    color: #000;
    font-size: 2rem;

    &:hover {
      text-decoration: none;
      color: #000;
    }
  }
`;

class Properties extends Component {
  state = {
    properties: [],
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({
      properties,
    });
  }

  render() {
    const name = this.props.match.params.name;
    const agentproperties = this.state.properties.filter(
      (properties) => properties.agent.name.replace(/\s+/g, "") === name
    );

    const agents = this.state.properties.map((property) => property.agent);

    const agent = agents.find(
      (agent) => agent.name.replace(/\s+/g, "") === name
    );

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
              {agent === undefined || null ? (
                <NotFound />
              ) : (
                <article className="d-flex justify-content-between p-5 mb-4 agent-details">
                  <div className="d-flex">
                    <img
                      className="mr-5"
                      style={{ width: "160px" }}
                      src={agent.img}
                      alt="agent"
                    />
                    <div className="align-self-end">
                      <h5 className="text-capitalize realtor">
                        {agent.realtor}
                      </h5>
                      <h6 className="text-capitalize address">
                        {agent.address}
                      </h6>
                    </div>
                  </div>

                  <div className="align-self-end">
                    <p className="phone">{agent.phone}</p>
                    <p className="email">{agent.email}</p>
                  </div>
                </article>
              )}
              <PropertiesWrapper>
                <div>
                  {agentproperties.map((property) => (
                    <Property key={property.id} property={property} />
                  ))}
                </div>
                {/* is this right? */}
                {agent === undefined || null ? null : <PropertyFilterForm />}
              </PropertiesWrapper>
            </Wrapper>
          )}
        </section>
      </>
    );
  }
}

const Wrapper = styled.section`
  .agent-details {
    border-bottom: 1px solid #ddd;
    width: 85vw;
    margin: 4rem auto;
  }

  .realtor {
    font-weight: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem !important;
  }

  .address {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .phone,
  .email {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

const PropertiesWrapper = styled.article`
  width: 85vw;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
`;

export default Properties;
