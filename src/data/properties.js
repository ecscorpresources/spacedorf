import React from "react";
import property1 from "../assets/img/properties/12.png";
import property2 from "../assets/img/properties/22.png";
import property3 from "../assets/img/properties/23.png";
import property4 from "../assets/img/properties/24.png";
import property5 from "../assets/img/properties/25.png";

import property6 from "../assets/img/home/1.png";
import property7 from "../assets/img/home/2.png";
import property8 from "../assets/img/home/3.png";
import property9 from "../assets/img/home/4.png";

import property10 from "../assets/img/premiumspaces/27.png";
import property11 from "../assets/img/premiumspaces/28.png";
import property12 from "../assets/img/premiumspaces/29.png";
import property13 from "../assets/img/premiumspaces/30.png";
import property14 from "../assets/img/premiumspaces/31.png";

const propertytext = (
  <>
    All you need to complete setup for your <br /> comfort, choosing from a
    variety of <br /> charming & luxury well furnished <br /> apartment
  </>
);

export const properties = [
  {
    id: 1,
    img: property1,
    type: "3 bedroom duplex",
    location: "no. 19 philip str, surulere",
    realtor: "stack homes estate management",
    subtype: "duplex",
    benefits: ["gym ", "pool"],
    utilities: {
      rooms: 3,
      bathrooms: 3,
      toilets: 4,
    },
    timeposted: "3 days ago",
    price: "88m",
    featured: false,
    premiumspace: false,
  },

  {
    id: 2,
    img: property2,
    type: "3 bedroom flat",
    location: "no. 33 lamina molusi str, igammu",
    realtor: "samson & sons",
    subtype: "flat",
    utilities: {
      rooms: 3,
      bathrooms: 2,
      toilets: 3,
    },
    timeposted: "7 hours ago",
    price: "450k",
    featured: false,
    premiumspace: false,
  },

  {
    id: 3,
    img: property3,
    type: "office space 1500sq/m",
    location: "no. 52 president road, lekki",
    realtor: "whole homes management ",
    subtype: "commercial",
    utilities: {
      rooms: 0,
      bathrooms: 2,
      toilets: 5,
    },
    timeposted: "1 month ago",
    price: "50m",
    featured: false,
    premiumspace: false,
  },

  {
    id: 4,
    img: property4,
    type: "mimi flat(Pool House)",
    location: "no. 231 green st, Orlando estate, ibeju lekki",
    realtor: "rita james",
    subtype: "flat",
    utilities: {
      rooms: 1,
      bathrooms: 1,
      toilets: 1,
    },
    timeposted: "2 days ago",
    price: "95k",
    featured: false,
    premiumspace: false,
  },

  {
    id: 5,
    img: property5,
    type: "1 Acre of Land",
    location: "along ibadan express way",
    realtor: "greenland estate agency",
    subtype: "land",
    utilities: {
      rooms: 0,
      bathrooms: 0,
      toilets: 0,
    },
    timeposted: "4 months ago",
    price: "300k",
    featured: false,
  },

  {
    id: 6,
    img: property6,
    type: "short-let apartments",
    location: "along ibadan express way",
    realtor: "blessing aguele",
    subtype: "land",
    utilities: {
      rooms: 0,
      bathrooms: 0,
      toilets: 0,
    },
    timeposted: "4 months ago",
    price: "300k",
    number: 248,
    featured: true,
    premiumspace: false,
    description: propertytext,
  },

  {
    id: 7,
    img: property7,
    type: "work space",
    location: "along ibadan express way",
    realtor: "city homes",
    subtype: "land",
    utilities: {
      rooms: 0,
      bathrooms: 0,
      toilets: 0,
    },
    timeposted: "4 months ago",
    price: "300k",
    number: 336,
    premiumspace: false,
    featured: true,
    description: "Funtional workspace",
  },

  {
    id: 8,
    img: property8,
    type: "event space",
    location: "along ibadan express way",
    realtor: "bb realtors",
    subtype: "land",
    utilities: {
      rooms: 0,
      bathrooms: 0,
      toilets: 0,
    },
    timeposted: "4 months ago",
    price: "300k",
    number: 517,
    featured: true,
    premiumspace: false,
    description: propertytext,
  },

  {
    id: 9,
    img: property9,
    type: "home properties",
    location: "along ibadan express way",
    realtor: "samland investments co",
    subtype: "land",
    utilities: {
      rooms: 0,
      bathrooms: 0,
      toilets: 0,
    },
    timeposted: "4 months ago",
    price: "300k",
    number: 149,
    featured: true,
    premiumspace: false,
    description: propertytext,
  },

  //   start
  {
    id: 10,
    img: property10,
    type: "laturo conference hall",
    location: "no. 9 ondo str, isolo lagos",
    guest: "200 guest capacity",
    subtype: "conference hall",
    carcapacity: "20 car parking capacity",
    utilities: {
      toilets: 4,
    },
    price: "150m",
    featured: false,
    premiumspace: true,
  },

  {
    id: 11,
    img: property11,
    type: "remisence gardens",
    location: "no. 23 hanson road, ikeja lagos",
    guest: "400 guest capacity",
    subtype: "outdoor",
    carcapacity: "50 car parking capacity",
    utilities: {
      toilets: 4,
    },
    price: "450m",
    featured: false,
    premiumspace: true,
  },

  {
    id: 12,
    img: property12,
    type: "ords bar",
    location: "no. 1 alfred osondu, owerri, imo",
    guest: "30 guest capacity",
    subtype: "meeting",
    carcapacity: "10 car parking capacity",
    utilities: {
      toilets: 2,
    },
    price: "65",
    featured: false,
    premiumspace: true,
  },

  {
    id: 13,
    img: property13,
    type: "phronesis place",
    location: "no. 88 pipeline road, warri, delta",
    guest: "600 guest capacity",
    subtype: "marguee",
    carcapacity: "30 car parking capacity",
    utilities: {
      toilets: 8,
    },
    price: "350",
    featured: false,
    premiumspace: true,
  },

  {
    id: 14,
    img: property14,
    type: "phronesis place",
    location: "no. 88 pipeline road, warri, delta",
    guest: "600 guest capacity",
    subtype: "marguee",
    carcapacity: "30 car parking capacity",
    utilities: {
      toilets: 8,
    },
    price: "350",
    featured: false,
    premiumspace: true,
  },

  {
    id: 15,
    img: property14,
    type: "plethora hall",
    location: "no. 67 gowon road, gowon estate, lagos",
    guest: "700 guest capacity",
    subtype: "event hall",
    carcapacity: "50 car parking capacity",
    utilities: {
      toilets: 8,
    },
    price: "500",
    featured: false,
    premiumspace: true,
  },
];
