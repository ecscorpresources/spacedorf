import React, { Component } from "react";
import Hero from "../components/Globals/Hero";
import smallhero from "../assets/img/11.png";
import Agents from "../components/Agents/Agents";
import LocateAgent from "../components/Forms/LocateAgent";

class agents extends Component {
  render() {
    return (
      <>
        <Hero img={smallhero}>
          <LocateAgent />
        </Hero>
        <section className="agents">
          <Agents />
        </section>
      </>
    );
  }
}

export default agents;
