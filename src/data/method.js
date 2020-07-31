import React from "react";
import method1 from "../assets/img/home/6.png";
import method2 from "../assets/img/home/7.png";
import method3 from "../assets/img/home/8.png";

const text1 = (
  <>
    With over 250 agents in our platform <br /> you will find a good hand within{" "}
    <br /> your choice area
  </>
);

const text2 = (
  <>
    Place your property in view of <br /> real estate agents and potential{" "}
    <br /> buyers from all across Nigeria
  </>
);

const text3 = (
  <>
    Post a request and a real estate <br /> agent will contact you when <br />{" "}
    they have a property fitting your need
  </>
);

export const method = [
  {
    img: method1,
    title: "Locate an agent",
    subtitle: "Let Us Help",
    text: text1,
  },

  {
    img: method2,
    title: "List a Property",
    subtitle: "Sell that house...FAST",
    text: text2,
  },

  {
    img: method3,
    title: "Post a Request",
    subtitle: "Don't see what you like?",
    text: text3,
  },
];
