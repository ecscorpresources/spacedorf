import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FilterButton } from "../Globals/StyledComponents";

class FilterForm extends Component {
  state = {};
  render() {
    return (
      <FilterWrapper>
        <article className="form-section">
          <form>
            <select name="location">
              <option value="Choice Location">Choice Location</option>
            </select>
            <select name="eventtype">
              <option value="Event Type">Event Type</option>
            </select>
            <select name="guestcapacity">
              <option value="Guest Capacity">Guest Capacity</option>
            </select>
            <select name="parkingcapacity">
              <option value="Parking Space Capacity">
                Parking Space Capacity
              </option>
            </select>
            <select name="pricerange">
              <option value="Price Range">Price Range</option>
            </select>

            <p>Venue Type</p>
            <div className="d-flex">
              <div className="mr-5">
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Pool">Meeting Room</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Event Hall</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Outdoor</label>
                </div>
              </div>

              <div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Pool">Marquee</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="Theatre" id="" />
                  <label htmlFor="Theatre">Conference Hall</label>
                </div>
              </div>
            </div>

            <p>Facilities</p>
            <div className="d-flex">
              <div className="mr-5">
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Pool">Restrooms</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Security</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Projector</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Stage</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Chairs</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Sound</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">TV</label>
                </div>
              </div>

              <div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Pool">WIFI</label>
                </div>
                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Projector</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Tables</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Airconditioning</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Changing Room</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Parking Space Capacity</label>
                </div>

                <div className="d-flex align-items-center">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="Theatre">Alternate Power Supply</label>
                </div>
              </div>
            </div>
            <FilterButton type="submit">APPLY FILTER</FilterButton>
            <Link to="#!">REST FILTER</Link>
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

    a {
      color: #6b7d87;
      display: inline-block;
      text-align: center;
      text-decoration: underline !important;
      margin-top: 1rem;
    }
  }
`;

export default FilterForm;
