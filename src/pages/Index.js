import React from "react";
import SearchForm from "../components/Home/SearchForm";
import { featuredproperties } from "../data/featuredproperties";
import { method } from "../data/method";
import FindSpaceForm from "../components/Home/FindSpaceForm";
import banner from "../assets/img/home/9.png";
import banner2 from "../assets/img/home/10.png";

const Homepage = () => {
  return (
    <>
      <section className="homeHeroSection">
        <SearchForm />
      </section>

      <section className="homeFirstSection">
        <div className="line"></div>
        <h1>EXPLORE PROPERTIES</h1>
      </section>

      <section className="homeSecondSection">
        {featuredproperties.map((property, index) => (
          <div key={index} className="property">
            <img className="img-fluid" src={property.img} alt="property" />
            <div className="property-description">
              <h4>{property.type}</h4>
              <p>{property.number}</p>
            </div>
          </div>
        ))}
      </section>
      <section className="homeThirdSection">
        {method.map((item, index) => (
          <div
            className="d-flex flex-column align-items-center method"
            key={index}
          >
            <div>
              <img
                className="img-fluid"
                src={item.img}
                alt="how to purchase a property"
              />
            </div>
            <div>
              <h4>{item.title}</h4>
              <h5>{item.subtitle}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="homeFourthSection">
        <article className="section-banner">
          <img src={banner} alt="events hall" />
          <div className="section-text">
            <div className="text">
              <h4>small</h4>
              <p>gatherings</p>
              <h5>LARGE</h5>
              <h2>EVENTS</h2>
            </div>
          </div>
        </article>

        <article className="section-form">
          <FindSpaceForm />
        </article>
      </section>
      <section className="homeFifthSection">
        <img className="img-fluid" src={banner2} alt="banner" />
      </section>
    </>
  );
};

export default Homepage;
