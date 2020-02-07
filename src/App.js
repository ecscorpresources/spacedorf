import React, { lazy, Suspense } from "react";
import "./App.scss";
import { ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/includes/Navbar/Navbar";
import MySpinner from "./components/includes/MySpinner";
import Footer from "./components/includes/Footer/Footer";
const Homepage = lazy(() => import("./components/Homepage/Homepage"));
const PropertyListing = lazy(() =>
  import("./components/PropertyListing/PropertyListing")
);
const PremiumSpace = lazy(() =>
  import("./components/PremiumSpace/PremiumSpace")
);

const Agent = lazy(() => import("./components/Agent/Agent"));

function App() {
  return (
    <Router>
      <ThemeProvider>
        <Suspense fallback={<MySpinner />}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/properties_listing" component={PropertyListing} />
            <Route path="/premium_space" component={PremiumSpace} />
            <Route path="/agent" component={Agent} />
          </Switch>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
