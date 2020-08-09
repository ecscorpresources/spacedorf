import React, { Component } from "react";
import { properties } from "../data/properties";
import Spinner from "../components/Globals/Spinner";

class FeaturedProperties extends Component {
  state = {
    properties: [],
  };

  componentDidMount() {
    this.setState({
      properties: properties,
    });
  }
  render() {
    const featuredproperties = this.state.properties.filter(
      (property) => property.featured === true
    );
    return (
      <>
        <section className="homeSecondSection">
          {this.state.properties.length === 0 ? (
            <Spinner />
          ) : (
            <article className="featured-properties">
              {featuredproperties.map((property, index) => (
                <div key={index} className="property">
                  <img
                    className="img-fluid"
                    src={property.img}
                    alt="property"
                  />
                  <div className="property-description">
                    <h4>{property.type}</h4>
                    <p>{property.number}</p>
                  </div>
                </div>
              ))}
            </article>
          )}
        </section>
      </>
    );
  }
}

export default FeaturedProperties;
