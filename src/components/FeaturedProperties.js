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
              <h5>find more</h5>
              <div className="properties">
                {featuredproperties.map((property, index) => (
                  <div key={index} className="property">
                    <img
                      className="img-fluid"
                      src={property.img}
                      alt="property"
                    />
                    <div className="type">
                      <h6>{property.type}</h6>
                      <div className="description">
                        <p>{property.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          )}
        </section>
      </>
    );
  }
}

export default FeaturedProperties;
