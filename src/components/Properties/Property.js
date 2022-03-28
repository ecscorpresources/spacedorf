import React from "react";
import { Link } from "react-router-dom";

import icon1 from "../../assets/img/properties/13.png";
import icon2 from "../../assets/img/properties/14.png";
import icon3 from "../../assets/img/properties/15.png";
import icon4 from "../../assets/img/properties/16.png";
import icon5 from "../../assets/img/properties/17.png";
import icon6 from "../../assets/img/properties/18.png";
import icon7 from "../../assets/img/properties/19.png";
import icon8 from "../../assets/img/properties/20.png";
import icon9 from "../../assets/img/21.png";
import tag from "../../assets/img/54.png";
import styled from "styled-components";
import ContactAgent from "./ContactAgent";

// import PropTypes from "prop-types";

const Property = ({ property }) => {
  const {
    img,
    type,
    location,
    realtor,
    subtype,
    benefits,
    utilities,
    timeposted,
    price,
    agent,
    exclusive,
  } = property;
  return (
    <PropertyWrapper>
      <div style={{ position: "relative" }}>
        <Link
          style={{ textDecoration: "none", color: "#000" }}
          to="/properties"
        >
          <div className="rent">
            <h2 style={{ color: "#fff" }}>{exclusive}</h2>
            <img src={tag} alt="tag" />
          </div>
          <img className="img-fluid" src={img} alt={type} />
        </Link>
      </div>
      <div className="property-description-section">
        <div className="details">
          <ul className="location">
            <div className="type-location">
              <h5>{type}</h5>
              <li>
                <div className="icon">
                  <img src={icon1} alt="icon" />
                </div>
                <span>{location}</span>
              </li>
            </div>
            <li>
              <div className="icon">
                <img src={icon2} alt="icon" />
              </div>
              <span>{realtor}</span>
            </li>
            <li>
              <div className="icon">
                <img src={icon3} alt="icon" />
              </div>
              <span>{subtype}</span>
            </li>
          </ul>
          {property.benefits ? (
            <div className="d-flex benefits-container">
              <img className="mr-3" src={icon4} alt="benefits" />
              <ul className="benefits">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <ul className="utilities">
            <li>
              <img src={icon5} alt="icon" /> <span>{utilities.rooms}</span>
            </li>

            <li>
              <img src={icon6} alt="icon" /> <span>{utilities.bathrooms}</span>
            </li>
            <li>
              <img src={icon7} alt="icon" /> <span>{utilities.toilets}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="property-price-section">
        <ul>
          <li>
            <img src={icon8} alt="icon" /> <span>{timeposted}</span>
          </li>
          <li>
            <img src={icon9} alt="icon" />
            <span className="price">&#8358;{price}</span>
          </li>
        </ul>

        <ContactAgent agent={agent} />
      </div>
    </PropertyWrapper>
  );
};

const PropertyWrapper = styled.section`
  display: flex;
  border: 1px solid #ddd;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  .rent {
    position: absolute;
    top: 5%;
    right: -5%;
    h2 {
      color: #fff;
      position: absolute;
      left: 17%;
      top: 7%;
    }
  }

  .property-description-section {
    margin-left: 5rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;

    h5 {
      font-size: 2rem;
      font-weight: bold;
      text-transform: capitalize;
      margin-bottom: 1rem !important;
    }

    .details {
      flex: 1;
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
    }

    .details .icon {
      width: 25px;
    }

    .details ul li {
      display: flex;
      align-items: center;
    }
    .benefits-container {
      margin-bottom: 1rem;
    }
    .details ul.benefits {
      display: flex;

      li:not(:last-child) {
        margin-right: 1.5rem;
      }
      span {
        font-size: 1.3rem;
        text-transform: capitalize;
      }
    }

    .details ul.location {
      .type-location {
        margin-bottom: 2.5rem;
      }
      li {
        margin-bottom: 1rem;
      }

      span {
        display: inline-block;
        font-size: 1.3rem;
        text-transform: capitalize;
        margin-left: 1rem;
      }
    }

    .details ul.utilities {
      margin-top: auto;
      display: flex;

      li:not(:last-child) {
        margin-right: 8rem;
      }

      span {
        font-weight: bold;
        font-size: 1.5rem;
        display: inline-block;
        margin-left: 1rem;
      }
    }
  }

  .property-price-section {
    padding: 1rem 2rem 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul li {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    ul {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    ul li span {
      font-size: 1.3rem;
      display: inline-block;
      margin-left: 1rem;
    }

    .price {
      color: #f58634;
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
`;

Property.propTypes = {};

export default Property;
