import React from "react";
// import styled from "styled-components";
import "../../styles/dashboard.scss";

const Properties = ({ agent }) => {
  return (
    <>
      <table style={{ width: "100%" }}>
        <thead className="text-capitalize">
          <tr>
            <th>PropertyType</th>
            <th>Location</th>
            <th>Sale/Rent</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {agent.property.map((item) => (
            <tr key={item.id}>
              <td>{item.subtype}</td>
              <td>{item.location}</td>
              <td>rent</td>
              <td>&#8358;{item.price}</td>
              <td>view property</td>
              <td>delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Properties;
