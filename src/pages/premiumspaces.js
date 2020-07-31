import React from "react";
import "../styles/space.scss";
import { Link } from "react-router-dom";

const PremiumSpace = () => {
  return (
    <>
      <div id="premiumspaceFirstSection" className="container-fluid">
        <div className="row ">
          <div className="col-md-12">
            <h1>Get a Premium Space</h1>
          </div>
        </div>
      </div>
      <div id="premiumspaceSecondSection" className="container-fluid">
        <div className="row first_row">
          <div className="col-md-10">
            <h1>Search Results</h1>
          </div>
        </div>
      </div>
      <div id="premiumspaceThirdSection" className="container-fluid">
        <div className="row first_row">
          <div className="col-md-8">
            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/27.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>Laturo Conference Hall</li>
                      <li>
                        <img src={require("../assets/img/32.png")} alt="" />
                        <span>No. 9 Landie Ondo Str, Isolo, Lagos </span>
                      </li>
                      <li>
                        <img src={require("../assets/img/33.png")} alt="" />
                        <span>200 Guest Capacity</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/34.png")} alt="" />
                        <span>Conference Hall</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/35.png")} alt="" />
                        <span>20 Car Parking Capacity</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/36.png")} alt="" />
                        <span> 4</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <span className="days"> Overview</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N 150k</span>
                  <Link to="monkhey">More Info...</Link>
                </div>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/28.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>Remisence Gardans</li>
                      <li>
                        <img src={require("../assets/img/32.png")} alt="" />
                        <span>No. 23 Hanson Road, Ikeja, Lagos</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/33.png")} alt="" />
                        <span>400 Guest Capacity</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/34.png")} alt="" />
                        <span>Outdoor</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/35.png")} alt="" />
                        <span>50 Car Parking Capacity</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/36.png")} alt="" />
                        <span> 4</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <span className="days"> Overview</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N 450k</span>
                  <Link to="monkhey">More Info...</Link>
                </div>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/29.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>Ords Bar</li>
                      <li>
                        <img src={require("../assets/img/32.png")} alt="" />
                        <span>No. 1 Alfred Osondu, Owerri, Imo</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/33.png")} alt="" />
                        <span>30 Guest Capacity</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/34.png")} alt="" />
                        <span>Meeting Room</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/35.png")} alt="" />
                        <span>10 Car Parking Capacity</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/36.png")} alt="" />
                        <span> 2</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <span className="days"> Overview</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N 65k</span>
                  <Link to="monkhey">More Info...</Link>
                </div>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/30.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>Phronesis Place</li>
                      <li>
                        <img src={require("../assets/img/32.png")} alt="" />
                        <span>No. 88 Pipeline Road, Warri, Delta</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/33.png")} alt="" />
                        <span>600 Guest Capacity</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/34.png")} alt="" />
                        <span>Marquee</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/35.png")} alt="" />
                        <span>30 Car Parking Capacity</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/36.png")} alt="" />
                        <span> 8</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <span className="days"> Overview</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N 350k</span>
                  <Link to="monkhey">More Info...</Link>
                </div>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/31.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>Plethora Hall</li>
                      <li>
                        <img src={require("../assets/img/32.png")} alt="" />
                        <span>No. 67 Gowon Road, Gowon Estate, Lagos</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/33.png")} alt="" />
                        <span>700 Guest Capacity</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/34.png")} alt="" />
                        <span>Event Hall</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/35.png")} alt="" />
                        <span>50 Car Parking Capacity</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/36.png")} alt="" />
                        <span> 8</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <span className="days"> Overview</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N 300k</span>
                  <Link to="monkhey">More Info...</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="row first_row">
              <div className="col-md-12">
                <form action="">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Choice Location"
                  />
                  <select name="" id="">
                    <option value="All Contract Type">All Contract Type</option>
                  </select>
                  <select name="" id="">
                    <option value="Address">Address</option>
                  </select>
                  <select name="" id="">
                    <option value="All premiumspace Type">
                      All premiumspace Type
                    </option>
                  </select>
                  <select name="" id="">
                    <option value="Any No. of Bedroom">
                      Any No. of Bedroom
                    </option>
                  </select>
                  <select name="" id="">
                    <option value="Any No. of Bathroom">
                      Any No. of Bathroom
                    </option>
                  </select>
                  <select name="" id="">
                    <option value="Price Range">Price Range</option>
                  </select>

                  <p>Venue Type</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div>
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="Pool">Meeting</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Event</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Game Room" id="" />
                          <label htmlFor="Theatre">Outdoor</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 facilities_2">
                      <div>
                        <div>
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="Pool">Marquee</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Conference Hall</label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p>Facilities</p>
                  <div className="row">
                    <div className="col-md-6 facilities_1">
                      <div>
                        <div>
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="Pool">Restrooms</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Security</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Projector" id="" />
                          <label htmlFor="Theatre">Projector</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Game Room" id="" />
                          <label htmlFor="Theatre">Stage</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Game Room" id="" />
                          <label htmlFor="Theatre">Chairs</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Game Room" id="" />
                          <label htmlFor="Theatre">Sounds</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Game Room" id="" />
                          <label htmlFor="Theatre">TV</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 facilities_2">
                      <div>
                        <div>
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="Pool">Wifi</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Projector</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Tables</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Airconditioning</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Changing Space</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Park</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Power Supply</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit">APPLY FILTER</button>
                  <Link to="monkhey">RESET FILTER</Link>
                </form>
              </div>
            </div>
            <div className="row second_row">
              {/* <img src={require("../assets/img/26.png")} alt="" /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremiumSpace;
