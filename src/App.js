import React, { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/includes/Navbar/Navbar";
import Spinner from "./components/includes/Spinner";
import Footer from "./components/includes/Footer";
const Homepage = lazy(() => import("./components/Homepage/Homepage"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
