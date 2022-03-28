import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import { withRouter } from "react-router-dom";

import logo from "../../assets/img/26.png";

const Signup = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>Register</title>
        </Helmet>
        <Wrapper>
          <section className="login">
            <figure>
              <div className="img-container-login">
                <img src={logo} alt="logo" />
              </div>
            </figure>
            <form>
              <div className="form-header">
                <h1>Register</h1>
              </div>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="First Name"
              />
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last Name"
              />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <input
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
              <div className="form-footer">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">
                  I have read and agreed to the terms and conditions of Monkhey
                  and Spacedorf
                </label>
              </div>
              <button type="submit">SIGN UP</button>
            </form>
          </section>
        </Wrapper>
      </FadeIn>
    </>
  );
};

const Wrapper = styled.div`
background-color: #f7f7f7;
  section.login {
    margin: 0 auto;
    padding: 8rem;
    padding-right: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #094a6a;
    figure {
      /* text-align: left;
      font-family: "Open Sans"; */
      /* margin-right: 0.5rem; */
      h4 {
        font-size: 3.5em;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-bottom: 0.3rem;
         font-family: "Open Sans";
        font-weight: lighter;
      }
      h5 {
        font-size: 2.2em;
        margin-bottom: 0.6rem;
         font-family: "Open Sans";
        margin-block-start: 0;
        margin-block-end: 0;
         font-weight: bolder;
      }
      .img-container-login {
        height: 552px;
        margin-bottom: 5rem;
      }
      img {
        width: 100%;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      padding: 4rem;
      /* background-color: #fff; */
      width: 40%;
      /* -moz-box-shadow: 0 0 20px 20px #fafafa;
      -webkit-box-shadow: 0 0 20px 20px #fafafa;
      box-shadow: 0 0 20px 20px #fafafa; */
      .form-header {
        margin-bottom: 2rem;
        h1 {
          font-family: "Open Sans";
          font-weight: bolder;
          }
        }
      }
      input {
        display: block;
        padding: 1.5rem 3rem;
        margin-bottom: 1rem;
        width: 100%;
         border: 1px solid #d8d5a
      }
      input::placeholder {
        color: #606c86;
        opacity: 0,5;
        font-size: 1.5rem;
      }

      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #606c86;
      }

      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #606c86;
      }
      input:focus {
        outline: none;
      }
      .form-footer {
        display: flex;
        align-items: center;
        margin-bottom: 3rem;
        input {
          display: inline;
          width: fit-content;
          margin-right: 3rem;
        }
        label {
          font-size: 1.5em;
        }
      }
      button {
         background-color: #d8d5a0;
        padding: 1.3rem 1rem;
        color: #6b7d87;
        font-size: 1.6em;
        font-weight: bold;
        border: none;
          &:focus {
          outline: none;
        }
          &:hover {
          border: 1px solid #094a6a;
          color: #094a6a;
          background-color: #fff;
        }
      }
    }
  }
`;

export default withRouter(Signup);
