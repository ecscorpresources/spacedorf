import React, { lazy, Suspense } from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/includes/Navbar/Navbar";
const Homepage = lazy(() => import("./components/Homepage/Homepage"));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<p>Please wait</p>}>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
