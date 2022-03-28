import React from "react";

import SearchForm from "../components/Forms/SearchForm";
import Hero from "../components/Globals/Hero";
import heroimg from "../assets/img/home/1.jpg";
import contactimg from "../assets/img/home/6.png";
import FeaturedProperties from "../components/Properties/FeaturedProperties";
import { Contact } from "../components/Globals/StyledComponents";
import methodimg from "../assets/img/home/32.png";
import Contactus from "../components/Contactus";

const Homepage = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <Hero img={heroimg} home="true">
        <SearchForm />
      </Hero>

      <section className="homeFirstSection">
        <div className="process">
          <img src={methodimg} alt="method" />
        </div>
        <article className="processes">
          <div>
            <h5>Explore</h5>
            <p>
              Explore our large collection of fully <br /> serviced premium
              apartments and <br /> work spaces
            </p>
          </div>

          <div>
            <h5>Choose a location</h5>
            <p>
              Choose an apartment <br /> or work space that <br /> fits your
              location
            </p>
          </div>

          <div>
            <h5>Book</h5>
            <p>
              Having found the perfect space, <br /> contact the property
              manager <br /> or use our payment gateway to book
            </p>
          </div>
        </article>
      </section>
      <FeaturedProperties />
      {/* <section className="searchpropertysection d-flex">
        <article className="propertybanner">
          <img className="img-fluid" src={propertyimg} alt="property" />
        </article>
        <article className="searchform">
          <SearchProperty />
        </article>
      </section> */}

      {!show ? (
        <section className="contact-section d-flex justify-content-between align-items-center">
          <article className="d-flex align-items-center">
            <img className="mr-5" src={contactimg} alt="contact" />
            <h5>
              Contact our team of professionals to discuss your needs <br /> you
              can be rest assured of a better solution
            </h5>
          </article>
          <div>
            <Contact onClick={handleClick}>Contact Us</Contact>
          </div>
        </section>
      ) : (
        <Contactus />
      )}
    </>
  );
};

export default Homepage;
