import React from "react";
import styled from "styled-components";
import { PrimaryLink } from "../Globals/StyledComponents";
import { MdStar } from "react-icons/md";
// import PropTypes from "prop-types";

const Agent = ({ agent }) => {
  return (
    <>
      <AgentWrapper className="agent d-flex flex-column justify-content-between">
        <img className="avatar img-fluid mb-3 " src={agent.img} alt="agent" />
        <div className="p-4">
          <h2 className="text-capitalize realtor">{agent.realtor}</h2>
          <h3 className="agent text-capitalize">{agent.name}</h3>
          <h5 className="email">{agent.email}</h5>
          <h6 className="address">{agent.address}</h6>
          <p className="phone">{agent.phone}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center px-4 pb-4 pt-1 ">
          <ViewProfile to={`/agent/${agent.name.replace(/\s+/g, "")}`}>
            View Properties
          </ViewProfile>
          <div>
            <MdStar className="rating" />
            <MdStar className="rating" />
            <MdStar className="rating" />
            <MdStar className="rating" />
            <MdStar className="rating" />
          </div>
        </div>
      </AgentWrapper>
    </>
  );
};

const AgentWrapper = styled.article`
  background: #fff;
  border: 2px solid #f7f7f7;

  h2 {
    font-size: 1.7em !important;
    font-weight: bolder;
  }

  .realtor {
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 5px !important;
  }

  .agent {
    margin-bottom: 2.5rem !important;
    font-size: 12px;
    font-weight: 600;
  }

  .email,
  .address,
  .phone {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 8px !important;
  }
  .rating {
    font-size: 13px;
  }
`;

const ViewProfile = styled(PrimaryLink)`
  padding: 5px 18px;
  font-size: 14px;
`;

Agent.propTypes = {};

export default Agent;
