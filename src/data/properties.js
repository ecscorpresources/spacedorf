import React from "react";
// import property1 from "../assets/img/properties/21.png";
// import property2 from "../assets/img/properties/22.png";
// import property3 from "../assets/img/properties/23.png";
// import property4 from "../assets/img/properties/24.png";
// import property5 from "../assets/img/properties/25.png";

// import property6 from "../assets/img/home/1.png";
// import property7 from "../assets/img/home/2.png";
// import property8 from "../assets/img/home/3.png";
import property9 from "../assets/img/home/4.png";

// import agent2 from "../assets/img/agents/38.png";
// import agent3 from "../assets/img/agents/39.png";
// import agent4 from "../assets/img/agents/40.png";
// import agent5 from "../assets/img/agents/41.png";

import agent6 from "../assets/img/agents/42.png";
// import agent7 from "../assets/img/agents/43.png";

const propertytext = (
  <>
    All you need to complete setup for your <br /> comfort, choosing from a
    variety of <br /> charming & luxury well furnished <br /> apartment
  </>
);

const homeproperty = <>home properties</>;

const shortlet = <>short-let apartments</>;

export default [
  {
    id: 1,
    img: property9,
    exclusive: "FOR SALE",
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

    agent: {
      img: agent6,
      realtor: "stack homes estate management",
      name: "aisa baba",
      email: "ab22@stackhomesmngt.com",
      address: "No 3 ade street, ikota",
      phone: "08098765432",
      rating: 5.7,
      reviews: 81,
    },
  },

  {
    id: 2,
    img: property9,
    exclusive: "FOR RENT",
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

    agent: {
      img: agent6,
      realtor: "samson & sons",
      name: "samson daniel",
      email: "dan@sansonandsonsltdl.com",
      address: "No 27 new road",
      phone: "08098765432",
      rating: 8.7,
      reviews: 3,
    },
  },

  {
    id: 3,
    img: property9,
    exclusive: "FOR LEASE",
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

    agent: {
      img: agent6,
      realtor: "whole homes management",
      name: "adebisi ogbomosho",
      email: "wholehomesmg@gmail.com",
      address: "No 1 red road lime estate",
      phone: "08098765432",
      rating: 5.7,
      reviews: 81,
    },
  },

  {
    id: 4,
    img: property9,
    exclusive: "SHORT LET",
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
    featured: true,
    premiumspace: false,

    agent: {
      img: agent6,
      realtor: "rita james",
      name: "rita james",
      email: "rita234@gmail.com",
      address: "No 55 ajayi kingsley street",
      phone: "08098765432",
      rating: 5.7,
      reviews: 9,
    },
  },

  {
    id: 5,
    img: property9,
    exclusive: "FOR RENT",
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
    featured: true,

    agent: {
      img: agent6,
      realtor: "greenland estate agency",
      name: "omolade adeshina",
      email: "omo@greenlandest.com",
      address: "No 3 Ade Street, Ikota",
      phone: "08098765432",
      rating: 8.2,
      reviews: 15,
    },
  },

  // {
  //   id: 6,
  //   img: property6,
  //   exclusive: "SHORT LET",
  //   type: shortlet,
  //   location: "along ibadan express way",
  //   realtor: "blessing aguele",
  //   subtype: "land",
  //   utilities: {
  //     rooms: 0,
  //     bathrooms: 0,
  //     toilets: 0,
  //   },
  //   timeposted: "4 months ago",
  //   price: "300k",
  //   number: 248,
  //   featured: true,
  //   premiumspace: false,
  //   description: propertytext,

  //   agent: {
  //     img: agent6,
  //     realtor: "blessing aguele",
  //     name: "blessing aguele",
  //     email: "blessing@gmail.com",
  //     address: "No 27 new road",
  //     phone: "08098765432",
  //     rating: 4.6,
  //     reviews: 4,
  //   },
  // },

  // {
  //   id: 7,
  //   img: property7,
  //   exclusive: "FOR RENT",
  //   type: "work space",
  //   location: "along ibadan express way",
  //   realtor: "city homes",
  //   subtype: "land",
  //   utilities: {
  //     rooms: 0,
  //     bathrooms: 0,
  //     toilets: 0,
  //   },
  //   timeposted: "4 months ago",
  //   price: "300k",
  //   number: 336,
  //   premiumspace: false,
  //   featured: true,
  //   description: "Funtional workspace",

  //   agent: {
  //     img: agent7,
  //     realtor: "city homes",
  //     name: "emeka philips",
  //     email: "cityhomes@gmail.com",
  //     address: "No 1 red road lime estate",
  //     phone: "08098765432",
  //     rating: 6.5,
  //     reviews: 29,
  //   },
  // },

  // {
  //   id: 8,
  //   img: property8,
  //   exclusive: "FOR LEASE",
  //   type: "event space",
  //   location: "along ibadan express way",
  //   realtor: "bb realtors",
  //   subtype: "land",
  //   utilities: {
  //     rooms: 0,
  //     bathrooms: 0,
  //     toilets: 0,
  //   },
  //   timeposted: "4 months ago",
  //   price: "300k",
  //   number: 517,
  //   featured: true,
  //   premiumspace: false,
  //   description: propertytext,

  //   agent: {
  //     img: agent7,
  //     realtor: "bb realtors",
  //     name: "emerald chika",
  //     email: "chika@bbrealtors.com",
  //     address: "No 55 Ajayi Kingley Street",
  //     phone: "08098765432",
  //     rating: 8.0,
  //     reviews: 65,
  //   },
  // },

  {
    id: 9,
    img: property9,
    exclusive: "FOR SALE",
    type: homeproperty,
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

    agent: {
      img: agent6,
      realtor: "bb realtors",
      name: "emerald chika",
      email: "chika@bbrealtors.com",
      address: "No 55 Ajayi Kingley Street",
      phone: "08098765432",
      rating: 8.0,
      reviews: 65,
    },
  },

  {
    id: 10,
    img: property9,
    exclusive: "FOR RENT",
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

    agent: {
      img: agent6,
      realtor: "stack homes estate management",
      name: "aisa baba",
      email: "ab22@stackhomesmngt.com",
      address: "No 3 ade street, ikota",
      phone: "08098765432",
      rating: 5.7,
      reviews: 81,
    },
  },

  {
    id: 11,
    img: property9,
    exclusive: "SHORT LET",
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

    agent: {
      img: agent6,
      realtor: "whole homes management",
      name: "adebisi ogbomosho",
      email: "wholehomesmg@gmail.com",
      address: "No 1 red road lime estate",
      phone: "08098765432",
      rating: 5.7,
      reviews: 81,
    },
  },

  {
    id: 14,
    img: property9,
    exclusive: "FOR RENT",
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

    agent: {
      img: agent6,
      realtor: "whole homes management",
      name: "adebisi ogbomosho",
      email: "wholehomesmg@gmail.com",
      address: "No 1 red road lime estate",
      phone: "08098765432",
      rating: 5.7,
      reviews: 81,
    },
  },
];
