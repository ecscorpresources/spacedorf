import React from "react";
import SearchForm from "../components/Home/SearchForm";
import { featuredproperties } from "../data/properties";
import { method } from "../data/method";

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
        <div className="row first_row">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-5 image_div">
                <img src={require("../assets/img/9.png")} alt="" />
                <div>
                  <h4>small</h4>
                  <p>gatherings</p>
                  <h5>LARGE</h5>
                  <h2>EVENTS</h2>
                </div>
              </div>
              <div className="col-md-5 form_div">
                <div>
                  <div className="text_div">
                    <p>
                      Find and book a Space for your special events <br /> From
                      over 5000 choice venues
                    </p>
                  </div>
                  <div>
                    <form>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Choice Location"
                        />
                      </div>
                      <div className="select_div">
                        <select name="" id="" className="guest">
                          <option value="" defaultValue>
                            No. Of Guests
                          </option>
                        </select>

                        <select name="" id="" className="event">
                          <option value="" defaultValue>
                            Type of Event
                          </option>
                        </select>
                      </div>
                      <div className="select_div">
                        <select name="" id="" className="space">
                          <option value="" defaultValue>
                            Type of Space
                          </option>
                        </select>
                        <button type="submit">FIND A SPACE</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="homeFifthSection">
        <div className="row">
          <div className="col-md-12">
            <img src={require("../assets/img/10.png")} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
