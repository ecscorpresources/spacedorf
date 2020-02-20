import React from "react";
import { Link } from "react-router-dom";

const Property = props => {
  const {
    propertyimg,
    propertyname,
    propertyagent,
    email,
    address,
    phone,
    starimg
  } = props;
  return (
    <>
      <div className="col-10 col-sm-6 col-md-6 col-lg-2">
        <div className="image_div">
          <img src={propertyimg} alt="" className="img-fluid" />
        </div>
        <div>
          <p>{propertyname}</p>
          <span>{propertyagent}</span>

          <p>{email}</p>
          <p>{address}</p>
          <p>{phone}</p>
        </div>
        <div className="star_div">
          <Link to="/">View Profile</Link>
          <img src={starimg} alt="" className="img-fluid" />
        </div>
      </div>
    </>
  );
};

export default Property;
