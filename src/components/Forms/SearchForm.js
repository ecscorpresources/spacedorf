import React from "react";
import styled from "styled-components";

import dropdownicon from "../../assets/img/home/26.png";
import { UserContext } from "../../context/UserContext";

export default function SearchForm() {
  const { state, dispatch } = React.useContext(UserContext);
  // const [pick, setPick] = React.useState({
  //   start: "",
  //   end: "",
  //   dy: "",
  //   numOfDay: "",
  //   value: "apartment",
  // });

  React.useEffect(() => {
    let day1 = new Date(state.start);
    let day2 = new Date(state.end);
    console.log(day2);
    let val = parseInt((day2 - day1) / (24 * 3600 * 1000));
    if (Math.sign(val) > 0) {
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
    } else {
      dispatch({
        type: "UPDATE_STATE_DAY",
        payload: "",
        numOfDay: "",
      });
    }
  }, [state.end, state.start]);

  const handleChange = (e) => {
    // setPick({ ...pick, [e.target.id]: e.target.value });
    dispatch({
      type: "UPDATE_PICK",
      payload: [e.target.id],
      pick: e.target.value,
    });
  };

  return (
    <FormWrapper>
      <article>
        <h4>enjoy a perfect space</h4>
        <h6>your online source for premium apartment and workspace</h6>
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
                <select
                  name="value"
                  id="value"
                  value={state.value}
                  onChange={handleChange}
                >
                  <option value="apartment" defaultValue>
                    Apartment
                  </option>
                  <option value="work">Work Space</option>
                  <option value="event">Event Space</option>
                </select>
              </div>
              <div>
                <select name="" id="">
                  <option value="none" selected disabled hidden>
                    Prince Range
                  </option>
                  <option value="100,000 - 500,000" defaultValue>
                    100,000 - 500,000
                  </option>
                  <option value="500,000 - 2,000,000">
                    500,000 - 2,000,000
                  </option>
                </select>
              </div>
            </div>

            <div className="form-container-second-row">
              <div>
                <select name="" id="">
                  {state.value === "apartment" ? (
                    <option value="" defaultValue>
                      BedRooms
                    </option>
                  ) : state.value === "work" ? (
                    <option value="" defaultValue>
                      Office Space
                    </option>
                  ) : (
                    <option value="" defaultValue>
                      Hall Capacity
                    </option>
                  )}

                  <option value="">Property Location</option>
                </select>
              </div>
              <div>
                <label htmlFor="start">Start Date</label>
                <input
                  type="date"
                  name="start"
                  id="start"
                  value={state.start}
                  onChange={handleChange}
                />
                {/* <select name="" id="">
                    <option value="" defaultValue>
                      BathRooms
                    </option>
                    <option value="">BathRooms</option>
                  </select> */}
              </div>
              <div>
                <label htmlFor="start">End Date</label>
                <input
                  type="date"
                  name="end"
                  id="end"
                  value={state.end}
                  onChange={handleChange}
                />
                {/* <select name="" id="">
                    <option value="" defaultValue>
                      Price Range
                    </option>
                    <option value="">Property Location</option>
                  </select> */}
              </div>
              <div className="booked">
                <label htmlFor="diff">Days Booked</label>
                <input
                  type="text"
                  name="diff"
                  id="diff"
                  className="mt-auto"
                  value={`${state.dy} ${state.numOfDay}`}
                />
              </div>
              <button type="submit">Search</button>
            </div>
          </article>
        </form>
      </article>
    </FormWrapper>
  );
}

const FormWrapper = styled.section`
  h4 {
    text-transform: uppercase;
    font-size: 5rem;
    color: #fff;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem !important;
    font-family: NexaBold;
  }

  h6 {
    text-transform: uppercase;
    font-size: 1.9rem;
    font-weight: 400;
    color: #d8d5a0;
    text-align: center;
    margin-bottom: 2rem !important;
  }

  form {
    width: 70%;
  }

  .form-section {
    justify-content: center;

    .form-container {
      background-color: rgba(236, 230, 223, 0.5);
      padding: 40px 60px;
      padding-top: 20px;
    }

    .form-container-first-row {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      align-items: baseline;
      input {
        padding: 1.3rem 1rem 0.9rem 1rem;
      }
    }

    .form-container-second-row {
      display: grid;
      grid-template-columns: 1fr 200px 200px 95px 1fr;
      gap: 0.5rem;
      align-items: center;
      & div:nth-child(1) {
        select {
          margin-top: 2.1rem;
          padding: 1.2rem 0 1rem 1rem;
        }
      }
      .booked {
        input {
          background-color: #d1e06a !important;
          color: #000;
          padding: 0.7rem 1rem 0.9rem 1.3rem;
          font-weight: bold;
          font-size: 1.6em;
          border: 2px solid #d1e06a;
        }
      }
    }

    & div:nth-child(2) {
      input {
        background-color: transparent !important;
        border: 2px solid #75a710;
        border-radius: 0;
        padding: 1rem 0 1rem 1rem;
        font-size: 1.3rem;
        width: 100%;
        color: #000;
      }
    }

    select,
    input {
      width: 100%;
      padding: 1rem 0 1rem 1rem;
      font-size: 1.3rem;
      border: 2px solid #75a710;

      &:focus {
        outline: none !important;
      }
    }

    input {
      padding: 1rem 0 1rem 15px;
    }

    select {
      background-color: transparent !important;
      color: #000 !important;
      background-image: url(${dropdownicon});
      background-repeat: no-repeat;
      background-position: 94%, center;
      margin-top: 2.4rem;
    }

    label {
      font-size: 1.1em;
      font-weight: bold;
    }

    input {
      border: none;
    }

    button {
      background: #75a710;
      color: #fff;
      padding: 1.1rem;
      margin-top: auto;
      font-size: 1.5rem;
      border: none;
    }
  }
`;
