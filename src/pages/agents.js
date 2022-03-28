import React, { Component } from "react";
import Hero from "../components/Globals/Hero";
import smallhero from "../assets/img/53.png";
import Agents from "../components/Agents/Agents";
import LocateAgent from "../components/Forms/LocateAgent";

class agents extends Component {
  render() {
    return (
      <>
        <Hero img={smallhero}>
          <LocateAgent text="Locate A Property Agent" />
        </Hero>
        <section className="agents">
          <Agents />
        </section>
      </>
    );
  }
}

export default agents;
