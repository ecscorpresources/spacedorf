import React from "react";

import house1 from "../assets/img/3.png";
import house2 from "../assets/img/4.png";
import house3 from "../assets/img/5.png";

const prop1 = (
  <>
    Short-Let <br /> Apartments
  </>
);

export default [
  {
    img: house1,
    title: prop1,
    link: "/properties",
    txt:
      "Enjoy the protection and privileges of an Apartment that encloses the comfort and convenience of a Hotel.",
    point: "Match a home away from home.",
    button: "View Our Apartments",
  },
  {
    img: house2,
    title: "Work Space",
    txt:
      "Executive and motivating work environment that suits businesses of all sizes and budget. All for you wheneveryou need it..",
    point: "Find a workspace that fits your style.",
    button: "View Our Work-Space",
  },
  {
    img: house3,
    title: "Event Space",
    link: "premiumspaces",
    txt:
      "Find the right events space for your weddings, parties, conferences etc. Spacedorf provides a one stop shop for all your space needs, just the way you want it.",
    point: "We add color to your occasion",
    button: "View Our Event-Space",
  },
];
