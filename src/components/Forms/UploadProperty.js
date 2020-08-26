import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, ModalBody } from "reactstrap";
import styled from "styled-components";
import closeicon from "../../assets/img/close.png";
import {
  HALFGRID,
  GRID,
  EQUALGRID,
  Select,
  TextInput,
} from "../Globals/StyledComponents";
// import { MdPhotoCamera } from "react-icons/md";
import icon from "../../assets/img/99.png";

const SignIn = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);
  return (
    <>
      <Upload to="/dashboard" onClick={toggle}>
        Upload Property
      </Upload>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalBody>
          <div style={{ cursor: "pointer" }} className="close">
            <img src={closeicon} alt="close" onClick={closeModal} />
          </div>
          <Wrapper>
            <h5>Upload Property</h5>
            <form>
              <EQUALGRID>
                <Select>
                  <option value="propertytype">Property Type</option>
                </Select>

                <Select>
                  <option value="sale">For Sale</option>
                  <option value="rent">For Rent</option>
                </Select>
              </EQUALGRID>

              <EQUALGRID>
                <Select>
                  <option value="bedrooms">No of Bedrooms</option>
                </Select>

                <Select>
                  <option value="sale">No of Bathrooms</option>
                </Select>
              </EQUALGRID>

              <EQUALGRID>
                <Select>
                  <option value="toilets">No of Toilets</option>
                </Select>

                <Select>
                  <option value="extras">Extras</option>
                </Select>
              </EQUALGRID>

              <GRID>
                <TextInput type="text" placeholder="Property Location" />
              </GRID>

              <EQUALGRID>
                <Select>
                  <option value="State">State</option>
                </Select>
                <Select>
                  <option value="City">City</option>
                </Select>
              </EQUALGRID>

              <HALFGRID>
                <div>
                  <label className="d-block" htmlFor="price">
                    Enter Asking Price
                  </label>
                  <TextInput name="name" type="text" />
                </div>
              </HALFGRID>

              <article>
                <button type="submit">Upload Property</button>
              </article>
            </form>
          </Wrapper>
        </ModalBody>
      </Modal>
    </>
  );
};

const Wrapper = styled.section`
  padding: 4rem 6rem;

  label {
    font-size: 1.5rem;
    font-weight: bold;
  }

  h5 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 3rem !important;
    color: #243137;
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

const Upload = styled(Link)`
  color: #fff;
  background: #75a710;
  padding: 7px 20px;
  font-size: 1.5rem;
  border-radius: 50px;
  text-decoration: none;

  &:hover {
    color: #fff;
    background: #75a710;
  }
`;

export default SignIn;
