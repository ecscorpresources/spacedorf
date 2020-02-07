import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="homeFooterSection" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="row parent">
              <div className="col-md-3">
                <ul>
                  <li>Looking For</li>
                  <li>
                    <Link to="monkhey">Houses</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Apartments</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Commercial</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Lands</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <ul>
                  <li>Properties</li>
                  <li>
                    <Link to="monkhey">For Sale</Link>
                  </li>
                  <li>
                    <Link to="monkhey">For Rent</Link>
                  </li>
                  <li>
                    <Link to="monkhey">For Short Let</Link>
                  </li>
                  <li>
                    <Link to="monkhey">For Lease</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <ul>
                  <li>Quick Assits</li>
                  <li>
                    <Link to="monkhey">Locate An Agent</Link>
                  </li>
                  <li>
                    <Link to="monkhey">List A Property</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Post A Request</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Find an Event Venue</Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-3">
                <ul>
                  <li>Have A Question ? </li>
                  <li>
                    <Link to="monkhey">How to book</Link>
                  </li>
                  <li>
                    <Link to="monkhey">FAQs</Link>
                  </li>
                  <li>
                    <Link to="monkhey">Contact</Link>
                  </li>
                </ul>
                <ul className="social">
                  <li>
                    <Link to="monkhey">
                      <img
                        src={require("../../../assets/img/1cth.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="monkhey">
                      <img
                        src={require("../../../assets/img/2cth.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="monkhey">
                      <img
                        src={require("../../../assets/img/3cth.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="monkhey">
                      <img
                        src={require("../../../assets/img/4cth.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="monkhey">
                      <img
                        src={require("../../../assets/img/5cth.png")}
                        alt=""
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row copyright">
              <div className="col-md-12">
                <p>Copyright 2020 Spacedorf. All Rights Reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
