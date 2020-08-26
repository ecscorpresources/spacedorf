import React, { Component } from "react";
import { Helmet } from "react-helmet";
import FadeIn from "react-fade-in";
import {
  HALFGRID,
  EQUALGRID,
  Select,
  TextInput,
} from "../Globals/StyledComponents";
import { MdPhotoCamera } from "react-icons/md";
import styled from "styled-components";
import icon from "../../assets/img/99.png";

class Profile extends Component {
  render() {
    return (
      <>
        <FadeIn transitionDuration="600">
          <Helmet>
            <title>dashboard</title>
          </Helmet>

          <ProfileWrapper>
            <div>
              <form>
                <EQUALGRID>
                  <Select>
                    <option value="Country">Country</option>
                  </Select>
                  <TextInput type="text" placeholder="About Company" />
                </EQUALGRID>

                <EQUALGRID>
                  <TextInput type="text" placeholder="FIrst Name" />
                  <TextInput type="text" placeholder="Last Name" />
                </EQUALGRID>

                <EQUALGRID>
                  <TextInput type="text" placeholder="Phone No" />
                  <TextInput type="email" placeholder="Email" />
                </EQUALGRID>

                <EQUALGRID>
                  <Select>
                    <option value="State">State</option>
                  </Select>
                  <Select>
                    <option value="City">City</option>
                  </Select>
                </EQUALGRID>

                <EQUALGRID>
                  <TextInput type="agency" placeholder="Agency Association" />
                  <TextInput
                    type="text"
                    placeholder="Association Chairman Fullname"
                  />
                </EQUALGRID>

                <EQUALGRID>
                  <TextInput
                    type="charimancontact"
                    placeholder="Chairman Contact"
                  />
                  <TextInput type="text" />
                </EQUALGRID>

                <EQUALGRID>
                  <TextInput
                    type="charimancontact"
                    placeholder="Upload Govt Approved Credential"
                  />

                  <TextInput
                    type="charimancontact"
                    placeholder="Upload Agency Certificate"
                  />
                </EQUALGRID>
                <HALFGRID>
                  <section className="file">
                    <article>
                      <div>
                        <input
                          type="file"
                          name="profileimage"
                          id="profileimage"
                        />
                        <label htmlFor="profileimage">
                          <MdPhotoCamera className="file-icon" /> Upload Profile
                          Image
                        </label>
                      </div>
                    </article>
                  </section>
                </HALFGRID>
                <article>
                  <button type="submit">Update Profile</button>
                </article>
              </form>
            </div>
          </ProfileWrapper>
        </FadeIn>
      </>
    );
  }
}

const ProfileWrapper = styled.section`
  width: 45vw;
  margin-left: 10rem;
  padding: 4rem 0;
  @media (max-width: 992px) {
    width: 70vw;
    margin: 0 auto;
  }

  p {
    font-size: 1.7rem;
    padding-bottom: 1rem;
    color: #0c74c4;
    font-family: "Open Sans", sans-serif;
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

  select {
    background: url(${icon});
    background-repeat: no-repeat;
    background-position: 95% center;
  }

  .file {
    border: 2px dashed #cfddf1;
    background-color: #ecf2fa;
    margin-bottom: 1.5rem;
    padding: 0 1rem 1rem 1rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;

    & h5 {
      padding-top: 1rem;
      padding-left: 1rem;
      font-weight: 600;
      color: grey;
      font-size: 1.5rem;
    }

    & article {
      align-self: center;
    }

    & input[type="file"] {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    & label {
      font-size: 1.3rem;
      text-align: center;
      line-height: 1.3;
      cursor: pointer;
      font-weight: 600;
      color: grey;
    }

    .file-icon {
      font-size: 6rem;
      margin-right: 0.5rem;
    }
  }
`;

export default Profile;
