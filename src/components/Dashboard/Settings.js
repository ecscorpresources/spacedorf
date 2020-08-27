import React from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import { HALFGRID, TextInput } from "../Globals/StyledComponents";
import styled from "styled-components";

const Settings = () => {
  return (
    <>
      <FadeIn transitionDuration="600">
        <Helmet>
          <title>dashboard</title>
        </Helmet>

        <SettingsWrapper className="settingsFirstSection">
          <div>
            <p>Change Password</p>
            <form>
              <HALFGRID>
                <TextInput type="text" placeholder="Enter Old Password" />
              </HALFGRID>

              <HALFGRID>
                <TextInput type="text" placeholder="Enter New Password" />
              </HALFGRID>

              <HALFGRID>
                <TextInput type="text" placeholder="Re-type New Password" />
              </HALFGRID>

              <article>
                <button type="submit">Set New Password</button>
              </article>
            </form>
          </div>
        </SettingsWrapper>
      </FadeIn>
    </>
  );
};

const SettingsWrapper = styled.section`
  background: #f7f7f7;
  margin-top: 4rem;
  padding: 4rem 0 4rem 6rem;

  p {
    font-size: 1.5rem;
    padding-bottom: 1rem;
    color: #243137;
    font-family: "Open Sans", sans-serif;
    font-weight: 800;
  }

  a {
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: 600;
    color: #0c74c4;
    display: inline-block;
    margin-bottom: 4rem;
    padding: 0.5rem 1.5rem;

    &:hover {
      font-size: 1.5rem;
      text-decoration: none;
      font-weight: 600;
      color: #0c74c4;
    }

    &:not(:last-child) {
      margin-right: 4rem;
    }
  }

  & form {
    article:nth-child(4) {
      margin-bottom: 1.5rem;
    }
    button {
      color: #fff;
      background-color: #243137;
      border: none;
      text-decoration: none;
      text-align: center;
      display: inline-block;
      font-size: 1.5rem;
      padding: 0.8rem 4rem;
      font-family: "Open Sans", sans-serif;
      border-radius: 50px;
    }

    a {
      text-decoration: underline;
      color: #094a6a;
      font-size: 1.3rem;
      display: inline-block;

      &:hover {
        text-decoration: underline;
        color: #094a6a;
        font-size: 1.3rem;
        display: inline-block;
      }
    }
  }
`;

export default Settings;
