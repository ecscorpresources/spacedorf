import React, { lazy, Suspense } from "react";
import "./App.scss";
import { ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Spinner from "./components/Globals/Spinner";

import Navbar from "./components/Globals/Navbar/Navbar";
import Footer from "./components/Globals/Footer/Footer";

const Homepage = lazy(() => import("./pages/index"));
const Properties = lazy(() => import("./pages/properties"));
const PremiumSpace = lazy(() => import("./pages/premiumspaces"));
const Agents = lazy(() => import("./pages/agents"));
const AgentProperties = lazy(() => import("./components/Agents/Properties"));

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Suspense fallback={<Spinner />}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/premiumspaces" component={PremiumSpace} />
            <Route exact path="/agents" component={Agents} />
            <Route exact path="/properties" component={Properties} />
            <Route exact path="/agent/:name" component={AgentProperties} />
          </Switch>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
