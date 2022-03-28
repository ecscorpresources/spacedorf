import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import styled from "styled-components";
import closeicon from "../../assets/img/close.png";
import { PrimaryLink } from "../Globals/StyledComponents";
import { Link } from "react-router-dom";

const ContactAgent = ({ agent }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => setModal(!modal);

  const handleClick = () => {
    window.scroll(0, 0);
  };

  return (
    <>
      <PrimaryLink to="/property" onClick={handleClick}>
        View Property
      </PrimaryLink>
      <Modal isOpen={modal} toggle={toggle} size="sm" centered="true">
        <ModalBody>
          <div style={{ cursor: "pointer" }} className="close">
            <img src={closeicon} alt="close" onClick={closeModal} />
          </div>
          <Wrapper>
            <div>
              <h6 className="text-capitalize">Name : {agent.name}</h6>
              <h6>Email: {agent.email}</h6>
              <h6 className="text-capitalize">Address: {agent.address}</h6>
              <h6>Phone: {agent.phone}</h6>
            </div>
            <div>
              <Link to={`/agent/${agent.name.replace(/\s+/g, "")}`}>
                View Other Properties
              </Link>
            </div>
          </Wrapper>
        </ModalBody>
      </Modal>
    </>
  );
};

const Wrapper = styled.section`
  padding: 2rem 2rem;

  h6 {
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 1rem !important;
  }

  a {
    color: red;
  }
`;

export default ContactAgent;
