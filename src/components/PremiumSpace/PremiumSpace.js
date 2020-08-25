import React from "react";
import { Link } from "react-router-dom";
import icon1 from "../../assets/img/premiumspaces/32.png";
import icon2 from "../../assets/img/premiumspaces/33.png";
import icon3 from "../../assets/img/premiumspaces/34.png";
import icon4 from "../../assets/img/premiumspaces/35.png";
import icon5 from "../../assets/img/premiumspaces/36.png";
import icon6 from "../../assets/img/premiumspaces/21.png";
import styled from "styled-components";
import { PrimaryLink } from "../Globals/StyledComponents";

const Property = ({ property }) => {
  const {
    img,
    type,
    location,
    guest,
    subtype,
    carcapacity,
    utilities,
    price,
  } = property;
  return (
    <PropertyWrapper>
      <div>
        <Link
          style={{ textDecoration: "none", color: "#000" }}
          to="/premiumspaces"
        >
          <img className="img-fluid" src={img} alt={type} />
        </Link>
      </div>
      <div className="property-description-section">
        <h5>{type}</h5>
        <div className="details">
          <ul>
            <li>
              <img src={icon1} alt="icon" /> <span>{location}</span>
            </li>
            <li>
              <img src={icon2} alt="icon" /> <span>{guest}</span>
            </li>
            <li>
              <img src={icon3} alt="icon" /> <span>{subtype}</span>
            </li>
            <li>
              <img src={icon4} alt="icon" /> <span>{carcapacity}</span>
            </li>
            <li>
              <img src={icon5} alt="icon" /> <span>{utilities.toilets}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="property-price-section">
        <ul>
          <li>
            <Link to="/agent">Overview</Link>
          </li>
          <li>
            <img src={icon6} alt="icon" />
            <span className="price">&#8358;{price}</span>
          </li>
        </ul>

        <PrimaryLink to="/agent">More Info...</PrimaryLink>
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
      color: #333;
      font-size: 1.5rem;
    }
  }
`;

export default Property;
