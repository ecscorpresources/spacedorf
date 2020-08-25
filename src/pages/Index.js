import React from "react";
import SearchForm from "../components/Forms/SearchForm";
import Hero from "../components/Globals/Hero";
import heroimg from "../assets/img/home/1.jpg";
import propertyimg from "../assets/img/home/5.png";
import contactimg from "../assets/img/home/6.png";
import FeaturedProperties from "../components/FeaturedProperties";
import SearchProperty from "../components/Forms/SearchProperty";
import { Contact } from "../components/Globals/StyledComponents";
import methodimg from "../assets/img/home/spaceforf.png";

const Homepage = () => {
  return (
    <>
      <Hero img={heroimg} home="true">
        <SearchForm />
      </Hero>

      <section className="d-flex justify-content-center align-items-center homeFirstSection">
        <img src={methodimg} alt="method" />
      </section>
      <FeaturedProperties />
      <section className="searchpropertysection d-flex">
        <article className="propertybanner">
          <img className="img-fluid" src={propertyimg} alt="property" />
        </article>
        <article className="searchform">
          <SearchProperty />
        </article>
      </section>

      <section className="contact-section d-flex justify-content-between align-items-center">
        <article className="d-flex align-items-center">
          <img className="mr-5" src={contactimg} alt="contact" />
          <h5>
            Contact our team of professional to discuss your needs <br /> you
            can be rest assured of a better solution
          </h5>
        </article>
        <div>
          <Contact to="/">Contact Us</Contact>
        </div>
      </section>
    </>
  );
};

export default Homepage;
