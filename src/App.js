import React from "react";
import "./App.scss";
import { ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Globals/Navbar/Navbar";
import Footer from "./components/Globals/Footer/Footer";
import NotFound from "./components/NotFound";
import Homepage from "./pages/index";
import Agents from "./pages/agents";
import Properties from "./pages/properties";
import PremiumSpace from "./pages/premiumspaces";
import AgentProperties from "./components/Agents/Properties";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/premiumspaces" component={PremiumSpace} />
          <Route exact path="/agents" component={Agents} />
          <Route exact path="/properties" component={Properties} />
          <Route exact path="/agent/:name" component={AgentProperties} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
