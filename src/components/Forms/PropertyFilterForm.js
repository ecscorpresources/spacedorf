import React, { Component } from "react";
import styled from "styled-components";
// import banner from "../../assets/img/properties/26.png";
import { FilterButton } from "../Globals/StyledComponents";

class PropertyFilterForm extends Component {
  state = {};
  render() {
    return (
      <FilterWrapper>
        <article className="form-section">
          <form>
            <select name="contacttype">
              <option value="All Contract Type">All Contract Type</option>
            </select>
            <select name="address">
              <option value="Address">Address</option>
            </select>
            <select name="propertytype">
              <option value="All Property Type">All Property Type</option>
            </select>
            <select name="bednumber">
              <option value="Any No. of Bedroom">Any No. of Bedroom</option>
            </select>
            <select name="bathroomnumber">
              <option value="Any No. of Bathroom">Any No. of Bathroom</option>
            </select>
            <select name="pricerange">
              <option value="Price Range">Price Range</option>
            </select>

            <p>Extras</p>
            <div className="d-flex">
              <div className="mr-5">
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Pool">Pool</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="Theatre" id="" />
                  <label htmlFor="Theatre">Theatre</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="Game Room" id="" />
                  <label htmlFor="Theatre">Game Room</label>
                </div>
              </div>

              <div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Pool">Gym</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="Theatre" id="" />
                  <label htmlFor="Theatre">Storage</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="Game Room" id="" />
                  <label htmlFor="Theatre">Laundry Room</label>
                </div>
              </div>
            </div>
            <FilterButton type="submit">SEARCH</FilterButton>
          </form>
        </article>
      </FilterWrapper>
    );
  }
}

const FilterWrapper = styled.section`
  .form-section {
    background: #f8f8f8;
    padding: 1.5rem 1.5rem 3rem 1.5rem;
    margin-bottom: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;

    select {
      background-color: #fff !important;
      margin-bottom: 1rem;
      padding: 1rem 0 0.5rem 0.5rem;
      border: 1px solid #ddd;
      color: #6b7d87;
      width: 100%;
      font-size: 1.4rem;
    }

    p {
      margin-top: 1rem !important;
      margin-bottom: 1rem !important;
      font-weight: bold;
      color: #6b7d87;
      font-size: 1.25rem;
    }

    label {
      display: inline-block;
      font-size: 1.1rem;
      margin-left: 0.6rem;
      font-weight: bold;
      color: #6b7d87;
    }

    button {
      color: #fff;
      display: inline-block;
      background-color: #e36a37;
      border: none;
      padding: 0.8rem;
      font-size: 14px;
      letter-spacing: 0.2rem;
      margin-top: 2rem;
    }
  }
`;

export default PropertyFilterForm;
