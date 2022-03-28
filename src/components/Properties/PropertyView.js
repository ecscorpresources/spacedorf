import React from "react";
import styled from "styled-components";
import { GrStar } from "react-icons/gr";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

import Hero from "../Globals/Hero";
import smallhero from "../../assets/img/53.png";
import LocateAgent from "../Forms/LocateAgent";
import HeroSlide from "../../slides/HeroSlide";

import img1 from "../../assets/img/16.png";
import img2 from "../../assets/img/17.png";
import img3 from "../../assets/img/18.png";
import img4 from "../../assets/img/19.png";
import img5 from "../../assets/img/20.png";
import whatsapp from "../../assets/img/61.png";
import map from "../../assets/img/67.png";
import facebook from "../../assets/img/22.png";
import twitter from "../../assets/img/24.png";
import instagram from "../../assets/img/23.png";

export default function PropertyView() {
  const [active, setActive] = React.useState({
    overview: true,
    facilities: false,
    rooms: false,
    reviews: false,
  });

  const { state, dispatch } = React.useContext(UserContext);

  const [disable, setDisable] = React.useState({
    payment: false,
    time: false,
  });

  const changeDisable = (e) => {
    setDisable({ ...disable, [e.target.id]: [!e.target.id] });
  };

  React.useEffect(() => {
    let day1 = new Date(state.start);
    let day2 = new Date(state.end);
    let val = parseInt((day2 - day1) / (24 * 3600 * 1000));
    console.log(val);
    if (Math.sign(val) > 0) {
      console.log(val);
      val > 1
        ? dispatch({
            type: "UPDATE_DAY",
            payload: val,
            numOfDay: "Days",
          })
        : dispatch({
            type: "UPDATE_DAY",
            payload: val,
            numOfDay: "Day",
          });
    }
  }, [state.end, state.start]);

  const price = 25000;
  const total = state.dy * price;

  function thousands(num) {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  const handleClick = (e) => {
    switch (e.target.id) {
      case "overview":
        setActive({
          overview: true,
          facilities: false,
          rooms: false,
          reviews: false,
        });
        break;
      case "facilities":
        setActive({
          overview: false,
          facilities: true,
          rooms: false,
          reviews: false,
        });
        break;
      case "rooms":
        setActive({
          overview: false,
          facilities: false,
          rooms: true,
          reviews: false,
        });
        break;
      case "reviews":
        setActive({
          overview: false,
          facilities: false,
          rooms: false,
          reviews: true,
        });
        break;
      default:
        return setActive({
          overview: true,
          facilities: false,
          rooms: false,
          reviews: false,
        });
    }
  };

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_PICK",
      payload: [e.target.id],
      pick: e.target.value,
    });
  };

  return (
    <>
      <Hero img={smallhero}>
        <LocateAgent text="Property Listings" />
      </Hero>
      <Wrapper>
        <article className="container">
          <div className="slide">
            <HeroSlide
              banner1={img1}
              banner2={img2}
              banner3={img3}
              banner4={img4}
              banner5={img5}
            />
          </div>
          <div>
            <div className="details">
              <div className="title">
                <h3>Victoria Apartments</h3>
                <h6>Lekki Phase 1</h6>
              </div>
              <div className="type">
                <h4>Single Room Apartment</h4>
              </div>
              <div className="desc">
                <p>No. 5 Dele Adedeji Srt, Lekki, Lagos. Nigeria</p>
              </div>
              <div className="whatsapp">
                <div className="box d-flex align-items-center mb-4">
                  <div className="img-container">
                    <img src={whatsapp} alt="whatsapp" />
                  </div>
                  <h6>08112345678</h6>
                </div>
                <p>
                  You can reach us directly on our line or directly schedule a
                  tour for the property{" "}
                </p>
              </div>
              <div className="button">
                <Link>Take a Virtual Tour</Link>
              </div>
            </div>
            <div className="social d-flex justify-content-end align-items-center">
              <p>Share this Space</p>
              <img src={facebook} alt="facebook" />
              <img src={instagram} alt="instagram" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
          <div className="features d-flex flex-column">
            <ul className="heading d-flex justify-content-around">
              <li
                className={active.overview ? "active" : ""}
                id="overview"
                onClick={handleClick}
              >
                Overview
              </li>
              <li
                className={active.facilities ? "active" : ""}
                id="facilities"
                onClick={handleClick}
              >
                Facilities
              </li>
              <li
                className={active.rooms ? "active" : ""}
                id="rooms"
                onClick={handleClick}
              >
                Rooms
              </li>
              <li
                className={active.reviews ? "active" : ""}
                id="reviews"
                onClick={handleClick}
              >
                Reviews
              </li>
            </ul>
            <div className="body">
              {active.overview ? (
                <div className="overview p-3">
                  <p>
                    Amazing gut rehab 2 bedroom 1 bath in the heart of Lekki is
                    available. Unit features new kitchen and bathroom, hardwood
                    floors, and exposed brick on the corner. Easy walk to the
                    movies at The Palms.
                  </p>
                  <p>
                    Well secured environment, with alternative power source.
                    With a Care taker at your beck and call
                  </p>
                </div>
              ) : active.facilities ? (
                <div className="facilities p-3">
                  <ul className="facilities_listing">
                    <li>Ensuite Rooms and a guest toilet</li>
                    <li>Access to gym</li>
                    <li>Airconditioning</li>
                    <li>Ample parking space</li>
                  </ul>
                </div>
              ) : active.rooms ? (
                <div className="rooms p-3">
                  <ul className="facilities_listing">
                    <li>2 Rooms</li>
                    <li>Ensuite Bathrooms</li>
                    <li>Wardrobes</li>
                    <li>Complementary towels and bathrobes</li>
                  </ul>
                </div>
              ) : (
                <div className="review">
                  <div className="rating">
                    <div className="row d-flex align-items-center justify-content-center">
                      <div className="grp-1 d-flex align-items-center justify-content-center">
                        <p className="mr-2">Avg. Ratings</p>
                        <div className="rating-section">
                          <GrStar className="rating" />
                          <GrStar className="rating" />
                          <GrStar className="rating" />
                          <GrStar className="rating" />
                          <GrStar className="rating" />
                        </div>
                        <p>(5 people rated this property)</p>
                      </div>
                      <p className="ml-auto font-weight-bold">3 Reviews</p>
                    </div>
                    <form className="mt-5">
                      <textarea
                        className="p-3"
                        name="review"
                        id="review"
                        cols="70"
                        rows="5"
                        placeholder="Write a review"
                      ></textarea>
                      <div className="grp-2 d-flex align-items-center justify-content-between">
                        <div className="experience d-flex flex-column">
                          <p>Rate your experience</p>
                          <div className="rating-section">
                            <GrStar className="rating" />
                            <GrStar className="rating" />
                            <GrStar className="rating" />
                            <GrStar className="rating" />
                            <GrStar className="rating" />
                          </div>
                        </div>
                        <button type="submit">Post Review</button>
                      </div>
                    </form>
                    <div className="posted">
                      <div className="detail d-flex align-items-center mb-3">
                        <p className="name">Peter Oku</p>
                        <p className="date">
                          posted <span>Sep 5, 2020</span>
                        </p>
                      </div>
                      <div className="comment">
                        <p>Nice room, quality service</p>
                      </div>
                    </div>
                    <div className="posted">
                      <div className="detail d-flex align-items-center mb-3">
                        <p className="name">James Omololu</p>
                        <p className="date">
                          posted <span>Aug 13, 2020</span>
                        </p>
                      </div>
                      <div className="comment">
                        <p>I enjoyed the use of gym, great place</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <div
              className="button payment"
              id="payment"
              onClick={changeDisable}
            >
              <Link id="payment" onClick={changeDisable}>
                Book this Space
              </Link>
            </div>
            {disable.payment && (
              <div className="book">
                <div className="price d-flex">
                  <h4>N{thousands(price)} / Night</h4>
                  <p onClick={changeDisable} id="time">
                    Edit Booking Date
                  </p>
                </div>
                <div className="date">
                  <div className="start d-flex flex-column">
                    <label htmlFor="start">Selected Start Date</label>
                    <input
                      type="date"
                      name="start"
                      id="start"
                      value={state.start}
                      onChange={handleChange}
                      disabled={disable.time ? "" : "disabled"}
                    />
                  </div>
                  <div className="end d-flex flex-column">
                    <label htmlFor="end">Selected End Date</label>
                    <input
                      type="date"
                      name="end"
                      id="end"
                      value={state.end}
                      onChange={handleChange}
                      disabled={disable.time ? "" : "disabled"}
                    />
                  </div>
                  <div className="total">
                    <p>
                      {`${state.dy} ${state.numOfDay}`}
                      {state.dy >= 1 ? " Booked" : ""}
                    </p>
                    <div className="sub d-flex">
                      <label htmlFor="sub">Sub-Total - </label>
                      <p>N{thousands(total)}</p>
                    </div>
                  </div>
                </div>
                <div className="button last">
                  <Link>Move to Payment</Link>
                </div>
              </div>
            )}
            <div className="map">
              <h4>Space Location</h4>
              <div className="img-container">
                <img src={map} alt="map" />
              </div>
            </div>
          </div>
        </article>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  width: 80%;
  margin: 4rem auto;
  padding: 4rem 4rem;
  background-color: #f7f7f7;
  position: relative;

  .button {
    margin-top: auto;
    background-color: #d8d5a0;
    padding: 1.5rem 2rem;
    text-align: center;
    a {
      color: #fff;
      font-size: 1.6em;
      font-weight: bold;
    }
  }
  .container {
    display: grid;
    grid-template-columns: 620px 290px;
    grid-gap: 2rem;
    grid-row-gap: 1rem;
    justify-content: center;
    .slide {
      .thumb {
        width: 120px !important;
        /* height: 100px !important; */
        img {
          height: 100% !important;
        }
      }
      .carousel .thumbs-wrapper {
        margin: 0;
        margin-top: 1rem;
      }

      @media (min-width: 960px) {
        .carousel .control-dots {
          bottom: 5% !important;
        }
      }
    }
    .details {
      border: 1px solid #e6e7e8;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      color: #84716b;
      line-height: 1.7em;
      margin: 0 auto;
      /* height: 420px; */
      h3 {
        font-size: 2rem;
        font-weight: 400;
      }
      h6 {
        font-size: 1.6em;
        font-weight: bold;
      }
      .title {
        padding: 1.5rem 3rem;
        border-bottom: 1px solid #e6e7e8;
        width: 90%;
        margin: 0 auto;
        h3 {
          margin-bottom: 0.4rem !important;
        }
      }
      .type {
        padding: 1.5rem 3rem;
        border-bottom: 1px solid #e6e7e8;
        width: 90%;
        margin: 0 auto;
        h4 {
          font-size: 1.5rem;
          font-weight: bold;
        }
      }
      .desc {
        padding: 2.5rem 3rem;
        border-bottom: 1px solid #e6e7e8;
        font-size: 1.5rem;
        width: 90%;
        margin: 0 auto;
      }
      .whatsapp {
        padding: 2.5rem 3rem;
        font-size: 1.2rem;
        width: 90%;
        margin: 0 auto;
        .img-container {
          width: 15px;
          margin-right: 1rem;
          img {
            width: 100%;
          }
        }
      }
    }
    .social {
      background-color: #f7f7f7;
      padding: 1rem 2rem;
      p {
        font-size: 1.2em;
        color: #84716b;
        margin-right: 1rem !important;
      }
      img {
        cursor: pointer;
      }
      img:not(last-child) {
        margin-right: 1rem;
      }
    }
    .features {
      background-color: #fff;
      padding: 1em 0 2em;
      height: 400px;
      font-size: 1.5em;
      border: 1px solid #e6e7e8;
      .heading {
        padding: 2rem;
        padding-top: 1rem;
        font-size: 1.3em;
        border-bottom: 1px solid #e6e7e8;
        li {
          cursor: pointer;
        }
        & .active {
          border-bottom: 4px solid #d8d5a0;
        }
      }
      .body {
        padding: 2rem 5rem 1rem;
        overflow-y: scroll;
        /* width */
        ::-webkit-scrollbar {
          width: 10px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
          background: #e6e7e8;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
          background: #555;
        }
        p {
          margin-bottom: 2rem !important;
        }
        .facilities_listing li {
          list-style: disc;
          margin-top: 1rem;
        }
        .rating {
          .rating {
            font-size: 1.5rem;
            fill: #243137;
          }

          .rating:nth-child(5),
          .rating:nth-child(4) {
            fill: #ddd;
            font-size: 1.5rem;
          }
          p {
            margin-bottom: 0 !important;
          }
          .grp-1 {
            p {
              margin-bottom: 0 !important;
            }
            p:nth-child(1) {
              font-weight: bold;
            }
            p:nth-child(3) {
              font-size: 0.8em;
              margin-left: 1rem !important;
            }
          }
          form {
            padding: 0 0 2rem;
            /* border-bottom: 1px solid #e6e7e8; */
            textarea {
              border: 1px solid #e6e7e8;
            }
            .rating {
              fill: #ddd;
              font-size: 1.5rem;
              cursor: pointer;
            }
            button {
              background-color: #d8d5a0;
              padding: 0.5rem 4rem;
              color: #fff;
              border: none;
              font-weight: bold;
            }
          }
          .posted {
            border-top: 1px solid #e6e7e8;
            padding-top: 1rem;
            margin-bottom: 2rem;
            .detail {
              .name {
                font-weight: bold;
                margin-right: 3rem !important;
              }
              .date {
                font-size: 1.2rem;
                span {
                  font-style: italic;
                  margin-left: 0.8rem;
                }
              }
            }
          }
        }
      }
    }
    .payment {
      margin-top: 0 !important;
      cursor: pointer;
    }
    .book {
      /* margin-top: -70px; */
      border: 1px solid #e6e7e8;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      color: #84716b;
      line-height: 1.7em;
      /* height: 450px; */

      .last {
        margin-top: auto !important;
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 1rem;
      }
      .price {
        padding: 1.5rem 2.5rem;
        border-bottom: 1px solid #e6e7e8;
        width: 90%;
        margin: 0 auto;
        display: flex;
        h4 {
          font-size: 1.3rem;
          font-weight: bold;
          margin-right: 1rem !important;
        }
        p {
          font-size: 1.2em;
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .date {
        padding: 2rem 4rem 3rem;
        .start,
        .end {
          margin: 0 auto 2rem;
          justify-content: center;
          input {
            padding: 1rem;
            /* width: 80%; */
            border: none;
            background-color: #e5e6e7;
            font-size: 1.3rem;
          }
          label {
            font-weight: bold;
            margin-bottom: 0 !important;
          }
        }
      }
    }
    .total {
      p {
        font-size: 1.2em;
        color: #999;
      }
      .sub {
        background-color: #ccc;
        padding: 1rem 2rem;
        label {
          flex: 1;
          font-size: 1.2em;
        }
        p {
          color: #000;
          font-size: 1.7em;
        }
      }
    }
    .map {
      margin-top: 2rem;
      .img-container {
        width: 290px;
        img {
          width: 100%;
        }
      }
      h4 {
        margin-bottom: 1rem !important;
      }
    }
  }
`;
