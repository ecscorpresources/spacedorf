import React, { Component } from "react";
import styled from "styled-components";

import search from "../../assets/img/45.png";

class LocateAgent extends Component {
  render() {
    return (
      <Wrapper>
        <form>
          <h2 className="text-capitalize">{this.props.text}</h2>
          <input type="text" placeholder="What are you searching for?" />
          <div className="search-container">
            <img src={search} alt="search" />
          </div>
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled.section`
  padding-left: 10rem;
  width: 100%;

  form {
    display: flex;
    width: 100%;
    position: relative;
  }

  h2 {
    color: #000;
    font-size: 3rem;
    margin-right: 3rem !important;
    font-family: "Open Sans";
    font-weight: bolder;
  }

  input {
    padding: 12px 5rem 12px 3rem;
    font-size: 1.5rem;
    border-radius: 50px;
    border: 2px solid #000;
    width: 29%;
    font-size: 11px;
    display: inline-block;
    margin-right: 10px;
    &:focus {
      outline: none;
    }
  }
  .search-container {
    margin-left: -4.5rem;
    margin-top: 1.2rem;
    width: 20px;
    img {
      width: 100%;
    }
  }

  /* button {
    padding: 0 30px;
    border: none;
    font-size: 1.5rem;
    border-radius: 50px;
    background-color: #75a710;
    color: #fff;
    font-weight: 600;
    display: inline-block;
  } */
`;

export default LocateAgent;
