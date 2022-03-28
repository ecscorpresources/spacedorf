import React from "react";
import { Link } from "react-router-dom";
// import "./Toolbar.scss";
import styled from "styled-components";

import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { navbarlinks } from "../../../../constants/navlinks";
import logo from "../../../../assets/img/home/Spacedorflogo.png";
import bg from "../../../../assets/img/11.png";

const Toolbar = (props) => {
  return (
    <Wrapper>
      <header
        className="toolbar1"
        style={{
          backgroundColor:
            window.location.pathname === "/" ||
            window.location.pathname === "/dashboard"
              ? "transparent"
              : "none",
        }}
      >
        <nav className="toolbar_navigation">
          <div className="toolbar_toggle_button">
            <DrawerToggleButton
              handleDrawerToggleClick={props.handleDrawerToggleClick}
            />
          </div>
          <div className="toolbar_logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          <div className="toolbar_navigation_items">
            <ul className="nav-links">
              {navbarlinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path}>{link.text}</Link>
                </li>
              ))}
            </ul>
            <ul className="auth-links">
              <li>
                <Link to="/signup">SignUp</Link>
              </li>
              <li>
                <Link to="/signin">LogIn</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .toolbar1 {
    width: 100%;
    padding: 20px 30px;
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .toolbar_navigation {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .toolbar_logo a {
    text-decoration: none !important;
    color: #fff !important;
    font-size: 3rem !important;
  }

  .toolbar_navigation_items {
    display: flex;
    align-items: center;
    flex: 1;
  }

  .toolbar_navigation_items .nav-links {
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 10rem;
    margin-bottom: 0 !important;

    li:not(:last-child) {
      margin-right: 5rem;
    }

    a {
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
    }
  }

  .toolbar_navigation_items .auth-links {
    margin: 0 !important;
    display: flex;

    a {
      color: #000;
      background-color: #fff;
      padding: 5px 20px;
      border-radius: 4px;
      text-decoration: none;
      font-size: 1.3rem;
    }

    li:first-child {
      margin-right: 6px;
    }
  }

  @media (max-width: 768px) {
    .toolbar_navigation_items {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .toolbar_toggle_button {
      display: none;
    }
    .toolbar_logo {
      margin-left: 0;
    }
  }
`;

export default Toolbar;
