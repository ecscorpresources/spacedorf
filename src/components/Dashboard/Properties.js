import React from "react";
import { Link } from "react-router-dom";
import "../../styles/dashboard.scss";
import deleteicon from "../../assets/img/30.png";

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
              <td>
                <Link to="/dashboard">view property</Link>
              </td>
              <td className="delete">
                <img
                  style={{ cursor: "pointer" }}
                  src={deleteicon}
                  alt="delete"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Properties;
