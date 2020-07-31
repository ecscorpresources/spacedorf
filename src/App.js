import React, { lazy, Suspense } from "react";
import "./App.scss";
import { ThemeProvider } from "@chakra-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Globals/Navbar/Navbar";
import Spinner from "./components/Globals/Spinner";
import Footer from "./components/Globals/Footer/Footer";
const Homepage = lazy(() => import("./pages/Index"));
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
        <Suspense fallback={<Spinner />}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route exact path="/premium_space" component={PremiumSpace} />
            <Route exact path="/agent" component={Agent} />
            <Route
              exact
              path="/properties_listing"
              component={PropertyListing}
            />
          </Switch>
          <Footer />
        </Suspense>
      </ThemeProvider>
    </Router>
  );
}

export default App;
