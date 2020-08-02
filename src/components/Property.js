import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../assets/img/properties/13.png";
import icon2 from "../assets/img/properties/14.png";
import icon3 from "../assets/img/properties/15.png";
import icon4 from "../assets/img/properties/16.png";
import icon5 from "../assets/img/properties/17.png";
import icon6 from "../assets/img/properties/18.png";
import icon7 from "../assets/img/properties/19.png";
import icon8 from "../assets/img/properties/20.png";
import icon9 from "../assets/img/properties/21.png";
import styled from "styled-components";
import "../styles/properties.scss";

const Property = ({ property }) => {
  return (
    <PropertyWrapper>
      <div>
        <img className="img-fluid" src={property.img} alt={property.type} />
      </div>
      <div className="property-description-section">
        <h5>{property.type}</h5>
        <div className="details">
          <ul>
            <li>
              <img src={icon1} alt="icon" /> <span>{property.location}</span>
            </li>
            <li>
              <img src={icon2} alt="icon" /> <span>{property.realtor}</span>
            </li>
            <li>
              <img src={icon3} alt="icon" /> <span>{property.subtype}</span>
            </li>
            {property.benefits ? (
              <li>
                <img src={icon4} alt="icon" /> <span>{property.benefits}</span>
              </li>
            ) : null}
          </ul>

          <ul>
            <li>
              <img src={icon5} alt="icon" /> <span>{property.rooms}</span>
            </li>

            <li>
              <img src={icon6} alt="icon" /> <span>{property.bathrooms}</span>
            </li>
            <li>
              <img src={icon7} alt="icon" /> <span>{property.toilets}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="property-price-section">
        <ul>
          <li>
            <img src={icon8} alt="icon" /> <span>{property.timeposted}</span>
          </li>
          <li>
            <img src={icon9} alt="icon" />
            <span className="price">&#8358;{property.price}</span>
          </li>
        </ul>

        <Link to="/agent">Contact Agent</Link>
      </div>
    </PropertyWrapper>
  );
};

const PropertyWrapper = styled.section`
  display: flex;
  border: 1px solid #ddd;

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

  .property-description-section {
    margin-left: 1.5rem;
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
      justify-content: space-between;
    }

    .details ul li {
      display: flex;
      align-items: center;
    }

    .details ul:first-child {
      li:not(:last-child) {
        margin-bottom: 1rem;
      }

      span {
        display: inline-block;
        font-size: 1.3rem;
        text-transform: capitalize;
        margin-left: 1rem;
      }
    }

    .details ul:nth-child(2) {
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
      color: red;
      font-size: 2.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    a {
      color: #fff;
      background-color: #333;
      text-align: center;
      padding: 0.6rem 3rem;
      font-size: 1.5rem;
    }
  }
`;

export default Property;
