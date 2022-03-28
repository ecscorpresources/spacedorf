import React from "react";
import styled from "styled-components";

export default function SearchFilter({ data }) {
  return (
    <SearchWrapper>
      <h3>Search Filter</h3>
      <form>
        {data.map((type, index) => {
          return (
            <select name={type.name} key={index}>
              <option value={type.value}>{type.value}</option>
            </select>
          );
        })}
      </form>
    </SearchWrapper>
  );
}

const SearchWrapper = styled.section`
  width: 80vw;
  margin: 4rem auto;
  h3 {
    margin-bottom: 1rem !important;
    font-weight: bold;
  }
  select {
    background-color: #fff !important;
    margin-right: 1rem;
    padding: 1rem 2rem;
    border: 1px solid #ddd;
    color: #6b7d87;
    width: 15%;
    font-size: 1.4rem;
    &:focus {
      outline: none;
    }
  }
`;
