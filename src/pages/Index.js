import React from "react";

const Homepage = () => {
  return (
    <>
      <div className="homeHeroSection">
        <div className="row first_row">
          <div className="col-md-12">
            <h1>enjoy a perfect space</h1>
            <p>your online source for premium apartment and workspace</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Enter Choice Location - Suburb, State"
                  />
                </div>
                <div className="col-md-3">
                  <select name="" id="">
                    <option value="" defaultValue>
                      Property type
                    </option>
                    <option value="">Property Location</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select name="" id="">
                    <option value="" defaultValue>
                      For Sale
                    </option>
                    <option value="">Property Location</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <select name="" id="">
                    <option value="" defaultValue>
                      BedRooms
                    </option>
                    <option value="">Property Location</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select name="" id="">
                    <option value="" defaultValue>
                      BathRooms
                    </option>
                    <option value="">BathRooms</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select name="" id="">
                    <option value="" defaultValue>
                      Price Range
                    </option>
                    <option value="">Property Location</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <button type="submit">SEARCH</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="homeFirstSection">
        <div className="line"></div>
        <h1>EXPLORE PROPERTIES</h1>
      </div>

      <div className="homeSecondSection">
        <div className="row">
          <div className="col-10 col-sm-6 col-lg-3 my-2">
            <img
              src={require("../assets/img/2.jpg")}
              alt=""
              className="img-fluid"
            />
            <div>
              <h4>HOUSE</h4>
              <p>248</p>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-lg-3 my-2">
            <img
              src={require("../assets/img/3.jpg")}
              alt=""
              className="img-fluid"
            />
            <div>
              <h4>APARTMENT</h4>
              <p>336</p>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-lg-3 my-2">
            <img
              src={require("../assets/img/4.jpg")}
              alt=""
              className="img-fluid"
            />
            <div>
              <h4>COMMERCIAL</h4>
              <p>517</p>
            </div>
          </div>
          <div className="col-10 col-sm-6 col-lg-3 my-2">
            <img
              src={require("../assets/img/5.jpg")}
              alt=""
              className="img-fluid"
            />
            <div>
              <h4>LAND</h4>
              <p>149</p>
            </div>
          </div>
        </div>
      </div>
      <div className="homeThirdSection">
        <div className="row">
          <div className="col-md-3">
            <div>
              <img src={require("../assets/img/6.png")} alt="" />
              <h5>Locate an agent</h5>
              <h6>Let Us Help</h6>
              <p>
                With over 250 agents in our platform <br /> you will find a good
                hand within <br /> your choice area
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <img src={require("../assets/img/7.png")} alt="" />
              <h5>List a Property</h5>
              <h6>Sell that house...FAST</h6>
              <p>
                Place your property in view of <br /> real estate agents and
                potential <br /> buyers from all across Nigeria
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <img src={require("../assets/img/8.png")} alt="" />
              <h5>Post a Request</h5>
              <h6>Don't see what you like?</h6>
              <p>
                Post a request and a real estate <br /> agent will contact you
                when <br /> they have a property fitting your need
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="homeFourthSection">
        <div className="row first_row">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-5 image_div">
                <img src={require("../assets/img/9.png")} alt="" />
                <div>
                  <h4>small</h4>
                  <p>gatherings</p>
                  <h5>LARGE</h5>
                  <h2>EVENTS</h2>
                </div>
              </div>
              <div className="col-md-5 form_div">
                <div>
                  <div className="text_div">
                    <p>
                      Find and book a Space for your special events <br /> From
                      over 5000 choice venues
                    </p>
                  </div>
                  <div>
                    <form>
                      <div>
                        <input
                          type="text"
                          placeholder="Enter Choice Location"
                        />
                      </div>
                      <div className="select_div">
                        <select name="" id="" className="guest">
                          <option value="" defaultValue>
                            No. Of Guests
                          </option>
                        </select>

                        <select name="" id="" className="event">
                          <option value="" defaultValue>
                            Type of Event
                          </option>
                        </select>
                      </div>
                      <div className="select_div">
                        <select name="" id="" className="space">
                          <option value="" defaultValue>
                            Type of Space
                          </option>
                        </select>
                        <button type="submit">FIND A SPACE</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="homeFifthSection">
        <div className="row">
          <div className="col-md-12">
            <img src={require("../assets/img/10.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
