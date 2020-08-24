import styled from "styled-components";
import { Link } from "react-router-dom";

export const PrimaryLink = styled(Link)`
  color: #fff !important;
  background-color: #333;
  text-align: center;
  padding: 0.6rem 3rem;
  font-size: 1.5rem;
`;

export const FilterButton = styled.button`
  color: #fff;
  background-color: #e36a37;
  border: none;
  padding: 0.8rem;
  font-size: 14px;
  letter-spacing: 0.2rem;
  margin-top: 2rem;
`;

export const Contact = styled(Link)`
  color: #000;
  border: 1px solid #000;
  padding: 6px 22px;
  font-size: 16px;
  border-radius: 50px;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    color: #000;
  }
`;
