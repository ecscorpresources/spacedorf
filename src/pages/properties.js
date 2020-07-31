import React from "react";
import "../styles/properties.scss";
import { Link } from "react-router-dom";

const PropertyListing = () => {
  return (
    <>
      <div id="propertyFirstSection" className="container-fluid">
        <div className="row ">
          <div className="col-md-12">
            <h1>Property Listing</h1>
          </div>
        </div>
      </div>
      <div id="propertySecondSection" className="container-fluid">
        <div className="row first_row">
          <div className="col-md-10">
            <h1>Search Results</h1>
          </div>
        </div>
      </div>
      <div id="propertyThirdSection" className="container-fluid">
        <div className="row first_row">
          <div className="col-md-8">
            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/12.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>3 Bedroom Duplex</li>
                      <li>
                        <img src={require("../assets/img/13.png")} alt="" />
                        <span>No. 19 Philip Ade Str, Surulere</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/14.png")} alt="" />
                        <span>Pennant Agency</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/15.png")} alt="" />
                        <span>Duplex</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/16.png")} alt="" />
                        <span>Gym, Pool</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/17.png")} alt="" />
                        <span> 3</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/18.png")} alt="" />
                        <span> 3</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/19.png")} alt="" />
                        <span> 4</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src={require("../assets/img/20.png")} alt="" />
                  <span className="days"> 3 days ago</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N88m</span>
                  <Link to="monkhey">Contact Agent</Link>
                </div>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/22.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>3 Bedroom Flat</li>
                      <li>
                        <img src={require("../assets/img/13.png")} alt="" />
                        <span>No. 33 Lamina Molusi Str, Iganmu</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/14.png")} alt="" />
                        <span>Kingsley & Sons Management</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/14.png")} alt="" />
                        <span>Samland Investments Co.</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/16.png")} alt="" />
                        <span>Gym, Pool</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/17.png")} alt="" />
                        <span> 3</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/18.png")} alt="" />
                        <span> 2</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/19.png")} alt="" />
                        <span> 3</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src={require("../assets/img/20.png")} alt="" />
                  <span className="days"> 3 days ago</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N450k</span>
                  <Link to="monkhey">Contact Agent</Link>
                </div>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/23.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>Office Space 1500sq/m</li>
                      <li>
                        <img src={require("../assets/img/13.png")} alt="" />
                        <span>No. 52 President Road, Lekki</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/14.png")} alt="" />
                        <span>Samland Investments Co.</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/14.png")} alt="" />
                        <span>Samland Investments Co.</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/15.png")} alt="" />
                        <span>Commercial</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/17.png")} alt="" />
                        <span> 0</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/18.png")} alt="" />
                        <span> 2</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/19.png")} alt="" />
                        <span> 5</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src={require("../assets/img/20.png")} alt="" />
                  <span className="days"> 3 days ago</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N50m</span>
                  <Link to="monkhey">Contact Agent</Link>
                </div>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/24.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>Mini Flat (Pool House)</li>
                      <li>
                        <img src={require("../assets/img/13.png")} alt="" />
                        <span>
                          No. 231 Green St, Orlando Estate, Ibeju Lekki
                        </span>
                      </li>
                      <li>
                        <img src={require("../assets/img/14.png")} alt="" />
                        <span>Fin Estate Management</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/15.png")} alt="" />
                        <span>Flat</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/16.png")} alt="" />
                        <span>Gym, Pool</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/17.png")} alt="" />
                        <span> 1</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/18.png")} alt="" />
                        <span> 1</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/19.png")} alt="" />
                        <span> 1</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src={require("../assets/img/20.png")} alt="" />
                  <span className="days"> 3 days ago</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N95k</span>
                  <Link to="monkhey">Contact Agent</Link>
                </div>
              </div>
            </div>

            <div className="row individual_row">
              <div className="col-md-8">
                <div className="flex_container">
                  <div className="image_div">
                    <img src={require("../assets/img/25.png")} alt="" />
                  </div>
                  <div>
                    <ul className="description">
                      <li>1 Acre of Land</li>
                      <li>
                        <img src={require("../assets/img/13.png")} alt="" />
                        <span>Along Ibadan Express way</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/15.png")} alt="" />
                        <span>Land</span>
                      </li>

                      <li>
                        <img src={require("../assets/img/14.png")} alt="" />
                        <span>Samland Investments Co.</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/14.png")} alt="" />
                        <span>Samland Investments Co.</span>
                      </li>
                    </ul>

                    <ul className="toilet_bathroom">
                      <li>
                        <img src={require("../assets/img/17.png")} alt="" />
                        <span> 0</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/18.png")} alt="" />
                        <span> 0</span>
                      </li>
                      <li>
                        <img src={require("../assets/img/19.png")} alt="" />
                        <span> 0</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div>
                  <img src={require("../assets/img/20.png")} alt="" />
                  <span className="days"> 3 days ago</span>
                </div>

                <div>
                  <img src={require("../assets/img/21.png")} alt="" />
                  <span className="amount">N300k</span>
                  <Link to="monkhey">Contact Agent</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-2">
            <div className="row first_row">
              <div className="col-md-12">
                <form action="">
                  <select name="" id="">
                    <option value="All Contract Type">All Contract Type</option>
                  </select>
                  <select name="" id="">
                    <option value="Address">Address</option>
                  </select>
                  <select name="" id="">
                    <option value="All Property Type">All Property Type</option>
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

                  <p>Extras</p>
                  <div className="row">
                    <div className="col-md-6">
                      <div>
                        <div>
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="Pool">Pool</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Theatre</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Game Room" id="" />
                          <label htmlFor="Theatre">Games</label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 extras_2">
                      <div>
                        <div>
                          <input type="checkbox" name="" id="" />
                          <label htmlFor="Pool">Gym</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Theatre" id="" />
                          <label htmlFor="Theatre">Storage</label>
                        </div>
                        <div>
                          <input type="checkbox" name="Game Room" id="" />
                          <label htmlFor="Theatre">Laundry</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button type="submit">SEARCH</button>
                </form>
              </div>
            </div>
            <div className="row second_row">
              <img
                className="advert_img"
                src={require("../assets/img/26.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyListing;
