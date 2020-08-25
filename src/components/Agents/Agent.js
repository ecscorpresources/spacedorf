import React from "react";
import styled from "styled-components";
import { PrimaryLink } from "../Globals/StyledComponents";
// import PropTypes from "prop-types";

const Agent = ({ agent }) => {
  return (
    <>
      <AgentWrapper className="agent">
        <div>
          <img className="avatar img-fluid mb-3 " src={agent.img} alt="agent" />
          <h2 className="text-capitalize realtor">{agent.realtor}</h2>
          <h3 className="agent text-capitalize">{agent.agent}</h3>
          <h5 className="email">{agent.email}</h5>
          <h6 className="address">{agent.address}</h6>
          <p className="phone">{agent.phone}</p>
        </div>
        <div>
          <PrimaryLink to="/">View Profile</PrimaryLink>
        </div>
      </AgentWrapper>
    </>
  );
};

const AgentWrapper = styled.article`
  background: #f7f7f7;
  padding: 15px;

  .realtor {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px !important;
  }

  .agent {
    margin-bottom: 8rem !important;
  }

  .email,
  .address,
  .phone {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px !important;
  }
`;

Agent.propTypes = {};

export default Agent;
