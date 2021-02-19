import React from "react";
import { Switch, Route } from "react-router-dom";
import ScrollToTop from "../../scoll";

// import Home from "../../Pages/Home/index";
// import Exhibition from "../../Pages/Exhibition";
// import Technology from "../../Pages/Technology";
// import About from "../../Pages/About";
// import Contact from "../../Pages/Contact";



export default function Routes() {
  return (
    <div>
      <ScrollToTop />
      <Switch>
        {/* <Route exact path="/" component={Home} />
        <Route exact path="/exhibition" component={Exhibition} />
        <Route exact path="/technology" component={Technology} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
         */}
      </Switch>
    </div>
  );
}
