import React from "react";
import { Link } from "react-router-dom";
import "./Agent.scss";

const Angent = () => {
  return (
    <>
      <div id="agentFirstSection" className="container-fluid">
        <div className="row ">
          <div className="col-md-12">
            <h1>Locate A Property Agent</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <input
                type="text"
                placeholder="Search by Choice Location/Agent Name/Company"
              />
              <button type="submit">SEARCH</button>
            </form>
          </div>
        </div>
      </div>

      <div id="agentSecondSection" className="container-fluid">
        <div className="row first_row">
          <div className="col-md-10">
            <h1>Search Results</h1>
          </div>
        </div>
      </div>
      <div id="agentThirdSection" className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div>
              <img src={require("../../assets/img/37.png")} alt="" />
            </div>
            <div>
              <p>Stack Homes Estate Management</p>
              <span>Aisa Baba</span>

              <p>ab22@stackhomemngt.com</p>
              <p>No 3 Ade Street, Ikota</p>
              <p>08098765432</p>
            </div>
            <div>
              <Link to="/">View Profile</Link>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <img src={require("../../assets/img/37.png")} alt="" />
            </div>
            <div>
              <p>Stack Homes Estate Management</p>
              <span>Aisa Baba</span>

              <p>ab22@stackhomemngt.com</p>
              <p>No 3 Ade Street, Ikota</p>
              <p>08098765432</p>
            </div>
            <div>
              <Link to="/">View Profile</Link>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <img src={require("../../assets/img/37.png")} alt="" />
            </div>
            <div>
              <p>Stack Homes Estate Management</p>
              <span>Aisa Baba</span>

              <p>ab22@stackhomemngt.com</p>
              <p>No 3 Ade Street, Ikota</p>
              <p>08098765432</p>
            </div>
            <div>
              <Link to="/">View Profile</Link>
            </div>
          </div>
          <div className="col-md-2">
            <div>
              <img src={require("../../assets/img/37.png")} alt="" />
            </div>
            <div>
              <p>Stack Homes Estate Management</p>
              <span>Aisa Baba</span>

              <p>ab22@stackhomemngt.com</p>
              <p>No 3 Ade Street, Ikota</p>
              <p>08098765432</p>
            </div>
            <div>
              <Link to="/">View Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Angent;
