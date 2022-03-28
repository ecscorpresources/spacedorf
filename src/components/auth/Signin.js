import React from "react";
import styled from "styled-components";

import bg from "../../assets/img/25.png";

export default function Signin() {
  return (
    <Wrapper>
      <form>
        <div className="form-header">
          <h1>Login</h1>
          <p>
            Don't have an account? <a href="/signup">Register Here</a>
          </p>
        </div>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <div className="form-footer">
          <p>Forgot Password?</p>
        </div>
        <button>LOGIN</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 10rem;
  margin: 0auto;
  display: flex;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background-color: rgba(236, 230, 223, 0.5);
    width: 40%;
    color: #6b7d87;
    font-size: 1.2em;
    font-weight: bolder;
      margin-bottom: 2rem;
      h1 {
        font-family: "Open Sans";
        font-weight: bolder;
      }
      p {
        margin-bottom: 1rem !important;
        a {
          color: #f58634;
          cursor: pointer;
          a:hover {
            text-decoration: underline !important;
          }
        }
      }
    }
    input {
      display: block;
      padding: 1.5rem 3rem;
      border: 1px solid #d8d5a0;
      margin-bottom: 1rem;
      width: 100%;
    }
    input::placeholder {
      color: #606c86;
      opacity: 0.5;
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
      margin-left: auto;
      margin-bottom: 2rem;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    button {
       background-color: #d8d5a0;
       padding: 1.3rem 1rem;
       color: #6b7d87;
      font-size: 1.5em;
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
`;
