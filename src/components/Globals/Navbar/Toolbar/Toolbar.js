import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.scss";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import { navbarlinks } from "../../../../constants/navlinks";

const Toolbar = (props) => {
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
              <Link to="/">SignUp</Link>
            </li>
            <li>
              <Link to="/">LogIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Toolbar;