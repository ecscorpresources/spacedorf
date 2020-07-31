import React, { Component } from "react";
import styled from "styled-components";

class SearchForm extends Component {
  render() {
    return (
      <FormWrapper>
        <article>
          <h1>enjoy a perfect space</h1>
          <p>your online source for premium apartment and workspace</p>
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
  h1 {
    text-transform: uppercase;
    font-size: 50px;
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem !important;
  }

  p {
    text-transform: uppercase;
    font-size: 1.8rem;
    font-weight: 100;
    color: #fff;
    text-align: center;
    margin-bottom: 1rem !important;
  }

  form {
    width: 60%;
  }

  .form-section {
    justify-content: center;

    .form-container {
      background-color: rgba(236, 230, 223, 0.5);
      padding: 20px 60px;
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
      border: 1px solid #000;
      font-size: 1.3rem;
    }

    button {
      background: #30caa0;
      color: #fff;
      padding: 1rem;
      border: none;
      font-size: 1.3rem;
    }
  }
`;

export default SearchForm;
