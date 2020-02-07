import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_toggle_button">
          <DrawerToggleButton
            handleDrawerToggleClick={props.handleDrawerToggleClick}
          />
        </div>
        <div className="toolbar_logo">
          <Link to="/">Spacedorf</Link>
        </div>
        {/* <div className="spacer"></div> */}
        <div className="toolbar_navigation_items">
          <ul className="links">
            <li>
              <Link to="/properties_listing">Properties</Link>
            </li>
            <li>
              <Link to="/agent">Features</Link>
            </li>
            <li>
              <Link to="/premium_space">Rent an Event Hall</Link>
            </li>
            <li>
              <Link to="/">Let's Talk</Link>
            </li>
          </ul>
          <ul className="login_signup">
            <li>
              <Link to="/">Sign Up</Link>
            </li>
            <li>
              <Link to="/">Log In</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;
