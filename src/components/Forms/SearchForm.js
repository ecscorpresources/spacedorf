import React, { Component } from "react";
import styled from "styled-components";
import dropdownicon from "../../assets/img/home/26.png";

class SearchForm extends Component {
  state = {};
  render() {
    return (
      <FormWrapper>
        <article>
          <h4>enjoy a perfect space</h4>
          <h6>your online source for premium apartment and workspace</h6>
        </article>
        <article className="d-flex form-section">
          <form>
            <article className="form-container">
              <div className="form-container-first-row">
                <div>
                  <input
                    type="text"
                    placeholder="Enter Choice Location - Suburb, State"
                  />
                </div>
                <div>
                  <select name="" id="">
                    <option value="" defaultValue>
                      Property type
                    </option>
                    <option value="">Property Location</option>
                  </select>
                </div>
                <div>
                  <select name="" id="">
                    <option value="" defaultValue>
                      For Sale
                    </option>
                    <option value="">Property Location</option>
                  </select>
                </div>
              </div>

              <div className="form-container-second-row">
                <div>
                  <select name="" id="">
                    <option value="" defaultValue>
                      BedRooms
                    </option>
                    <option value="">Property Location</option>
                  </select>
                </div>
                <div>
                  <select name="" id="">
                    <option value="" defaultValue>
                      BathRooms
                    </option>
                    <option value="">BathRooms</option>
                  </select>
                </div>
                <div>
                  <select name="" id="">
                    <option value="" defaultValue>
                      Price Range
                    </option>
                    <option value="">Property Location</option>
                  </select>
                </div>
                <button type="submit">SEARCH</button>
              </div>
            </article>
          </form>
        </article>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.section`
  h4 {
    text-transform: uppercase;
    font-size: 5rem;
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem !important;
    font-family: NexaBold;
  }

  h6 {
    text-transform: uppercase;
    font-size: 1.9rem;
    font-weight: 400;
    color: #d8d5a0;
    text-align: center;
    margin-bottom: 2rem !important;
  }

  form {
    width: 70%;
  }

  .form-section {
    justify-content: center;

    .form-container {
      background-color: rgba(236, 230, 223, 0.5);
      padding: 40px 60px;
    }

    .form-container-first-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .form-container-second-row {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      gap: 0.5rem;
    }

    select,
    input {
      width: 100%;
      padding: 1rem 0 1rem 1rem;
      font-size: 1.3rem;
      border: 1px solid #fff;
    }

    input {
      padding: 1rem 0 1rem 15px;
    }

    select {
      background-color: transparent !important;
      color: #fff !important;
      background-image: url(${dropdownicon});
      background-repeat: no-repeat;
      background-position: 94%, center;
    }

    input {
      border: none;
      border-radius: 50px;
    }

    button {
      background: #75a710;
      color: #fff;
      padding: 1rem;
      border-radius: 50px;
      font-size: 1.3rem;
      border: none;
    }
  }
`;

export default SearchForm;
