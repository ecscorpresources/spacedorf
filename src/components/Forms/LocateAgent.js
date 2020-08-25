import React, { Component } from "react";
import styled from "styled-components";

class LocateAgent extends Component {
  render() {
    return (
      <Wrapper>
        <form>
          <h2 className="text-capitalize">locate a property agent</h2>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Search by Choice Location/Agent Name/Company"
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  padding-left: 10rem;

  h2 {
    color: #fff;
    font-size: 4rem;
    padding-top: 10rem;
    margin-bottom: 10px !important;
    font-weight: 600;
  }

  input {
    padding: 12px 0 12px 1rem;
    font-size: 1.5rem;
    border-radius: 50px;
    border: none;
    width: 25%;
    font-size: 11px;
    margin-right: 10px;
  }

  button {
    padding: 0 30px;
    border: none;
    font-size: 1.5rem;
    border-radius: 50px;
    background-color: #75a710;
    color: #fff;
    font-weight: 600;
  }
`;

export default LocateAgent;
