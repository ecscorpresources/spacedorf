import React, { Component } from "react";
import Hero from "../components/Globals/Hero";
import smallhero from "../assets/img/11.png";
import Agents from "../components/Agents/Agents";

class agents extends Component {
  render() {
    return (
      <>
        <Hero img={smallhero}>
          <h1 className="text-capitalize">locate a property agent</h1>
        </Hero>
        <section className="agents">
          <Agents />
        </section>
      </>
    );
  }
}

export default agents;
