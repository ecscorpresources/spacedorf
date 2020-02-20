import React from "react";
import { Link } from "react-router-dom";
import "./Agent.scss";
import Pagination from "../Pagination/Pagination";

const Agent = () => {
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
          <div className="col-10 col-sm-6 col-md-6 col-lg-2">
            <div className="image_div">
              <img
                src={require("../../assets/img/37.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div>
              <p>Stack Homes Estate Management</p>
              <span>Aisa Baba</span>

              <p>ab22@stackhomemngt.com</p>
              <p>No 3 Ade Street, Ikota</p>
              <p>08098765432</p>
            </div>
            <div className="star_div">
              <Link to="/">View Profile</Link>
              <img
                src={require("../../assets/img/49.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-6 col-lg-2">
            <div className="image_div">
              <img
                src={require("../../assets/img/38.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div>
              <p>Samson & Sons</p>
              <span>Samson Daniel</span>

              <p>dan@samsonandsonltdl.com</p>
              <p>No 27 New Road</p>
              <p>08098765432</p>
            </div>
            <div className="star_div">
              <Link to="/">View Profile</Link>
              <img
                src={require("../../assets/img/50.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-6 col-lg-2">
            <div className="image_div">
              <img
                src={require("../../assets/img/39.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div>
              <p>Whole Homes Management</p>
              <span>Adebisi Ogbomosho</span>

              <p>wholehomesmg@gmail.com</p>
              <p>1 Red Road Lime Estate</p>
              <p>08098765432</p>
            </div>
            <div className="star_div">
              <Link to="/">View Profile</Link>
              <img
                src={require("../../assets/img/51.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-6 col-lg-2">
            <div className="image_div">
              <img
                src={require("../../assets/img/40.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div>
              <p>Rita James</p>
              <span>Rita James</span>

              <p>rita234@gmail.com</p>
              <p>55, Ajayi Kingley Street</p>
              <p>08098765432</p>
            </div>
            <div className="star_div">
              <Link to="/">View Profile</Link>
              <img
                src={require("../../assets/img/52.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div id="agentFourthSection" className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <img
              src={require("../../assets/img/48.png")}
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>

      <div id="agentFifthSection" className="container-fluid">
        <div className="row">
          <div className="col-10 col-sm-6 col-lg-2">
            <div className="image_div">
              <img
                src={require("../../assets/img/41.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div>
              <p>Greenland Estate Agency</p>
              <span>Omolade Adeshina</span>

              <p>omo@greenlandest.com</p>
              <p>No 3 Ade Street, Ikota</p>
              <p>08098765432</p>
            </div>
            <div className="star_div">
              <Link to="/">View Profile</Link>
              <img
                src={require("../../assets/img/44.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-10 col-sm-6 col-lg-2">
            <div className="image_div">
              <img
                src={require("../../assets/img/37.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div>
              <p>Blessing Aguele</p>
              <span>Samson Daniel</span>

              <p>blessingag@gmail.com</p>
              <p>No 27 New Road</p>
              <p>08098765432</p>
            </div>
            <div className="star_div">
              <Link to="/">View Profile</Link>
              <img
                src={require("../../assets/img/45.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-10 col-sm-6 col-lg-2">
            <div className="image_div">
              <img
                src={require("../../assets/img/42.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div>
              <p>City Homes</p>
              <span>Emeka Philips</span>

              <p>cityhomes@gmail.com</p>
              <p>1 Red Road Lime Estate</p>
              <p>08098765432</p>
            </div>
            <div className="star_div">
              <Link to="/">View Profile</Link>
              <img
                src={require("../../assets/img/46.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-10 col-sm-6 col-md-6 col-lg-2">
            <div className="image_div">
              <img
                src={require("../../assets/img/43.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <div>
              <p>BB Realtors</p>
              <span>Emeka Chika</span>

              <p>chika@bbrealtors.com</p>
              <p>55, Ajayi Kingley Street</p>
              <p>08098765432</p>
            </div>
            <div className="star_div">
              <Link to="/">View Profile</Link>
              <img
                src={require("../../assets/img/47.png")}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <Pagination />
    </>
  );
};

export default Agent;
