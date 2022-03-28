import React from "react";
import styled from "styled-components";

const Hero = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

export default styled(Hero)`
  background-image: url(${(props) => props.img});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: ${(props) => (props.home ? "100vh" : "20vh")};
  margin-top: ${(props) => (props.home || props.dashboard ? "-89px" : 0)};
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    color: #000;
    font-size: 3.5rem;
    /* padding-top: 10rem; */
    padding-left: 5rem;
    font-family: "Open Sans";
    font-weight: bold;
  }
`;
