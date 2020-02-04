import React, { Component } from "react";
import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import "./Navbar.css";
import Backdrop from "./Backdrop/Backdrop";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {
    SideDrawerOpen: false
  };
  handleDrawerToggleClick = () => {
    this.setState(prevState => {
      return {
        SideDrawerOpen: !prevState.SideDrawerOpen
      };
    });
  };
  handleBackdropClick = () => {
    this.setState({
      SideDrawerOpen: false
    });
  };

  render() {
    console.log(this.props);
    let myBackdrop;
    if (this.state.SideDrawerOpen) {
      myBackdrop = <Backdrop handleBackdropClick={this.handleBackdropClick} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Toolbar handleDrawerToggleClick={this.handleDrawerToggleClick} />
        <SideDrawer show={this.state.SideDrawerOpen} />
        {myBackdrop}
        <main style={{ marginTop: "56px" }}></main>
      </div>
    );
  }
}

export default withRouter(Navbar);
