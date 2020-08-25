import React, { Component } from "react";
import Hero from "../components/Globals/Hero";
import smallhero from "../assets/img/11.png";

class agents extends Component {
  render() {
    return (
      <>
        <Hero img={smallhero}>
          <h1 className="text-capitalize">locate a property agent</h1>
        </Hero>
      </>
    );
  }
}

export default agents;
