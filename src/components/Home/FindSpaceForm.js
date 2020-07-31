import React, { Component } from "react";
import styled from "styled-components";

class FindSpaceForm extends Component {
  state = {};
  render() {
    return (
      <FormWrapper>
        <form>
          <article>
            <p>
              Find and book a Space for your special events <br /> From over
              5000 choice venues
            </p>
          </article>
          <FormContainer single="true">
            <input type="text" placeholder="Enter Choice Location" />
          </FormContainer>
          <FormContainer>
            <select name="" id="">
              <option value="" defaultValue>
                No. Of Guests
              </option>
            </select>

            <select name="" id="">
              <option value="" defaultValue>
                Type of Event
              </option>
            </select>
          </FormContainer>
          <FormContainer>
            <select name="" id="">
              <option value="" defaultValue>
                Type of Space
              </option>
            </select>
            <button type="submit">FIND A SPACE</button>
          </FormContainer>
        </form>
      </FormWrapper>
    );
  }
}

const FormWrapper = styled.section`
  width: 100%;
  form {
    input {
      padding: 10px 0 10px 10px;
      border: 1px solid grey;
      color: grey !important;
      font-size: 1.4rem;
    }

    select {
      padding: 10px 0 10px 10px;
      border: 1px solid grey;
      background-color: #fff !important;
      color: grey !important;
      font-size: 1.4rem;
    }

    button {
      background-color: #30caa0;
      border: none;
      padding: 10px 44px 10px;
      color: #fff;
      font-size: 1.4rem;
    }

    p {
      font-size: 1.5rem;
      color: #000;
      margin-bottom: 1rem !important;
      border-left: 2px solid #000;
      padding-left: 2rem;
    }
  }
`;

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.single ? "1fr" : " 1fr 1fr")};
  gap: 1rem;
  margin-bottom: 1rem;
`;

export default FindSpaceForm;
