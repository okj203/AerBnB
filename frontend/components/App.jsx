import React from "react";
import { Provider } from "react-redux";
import { Route, Redirect, Switch, Link, HashRouter } from "react-router-dom";
import HomeContainer from "./home/home_container";
import SpotsIndexContainer from "./spots/spot_index_container";
import SpotContainer from "./spots/spot/spot_container";
import SearchContainer from "./search/search_container";

import fontawesome from "@fortawesome/fontawesome";
import regular from "@fortawesome/free-regular-svg-icons";
import solid from "@fortawesome/free-solid-svg-icons";
import brands from "@fortawesome/free-brands-svg-icons";

// fontawesome.library.add(regular)
// fontawesome.library.add(solid)
// fontawesome.library.add(brands)

const App = () => (
  // the header displays on every single page, b/c it's not on any route
  // but depending on which route, renders different page
  // by default of hashrouter '/' is homepage (#/)

  <div>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/spots" component={SpotsIndexContainer} />
      <Route path={`/spots/:spotId`} component={SpotContainer} />
      <Route path={`/search`} component={SearchContainer} />
    </Switch>
  </div>
);

export default App;
