import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header/Header";
import Carousel from "./carousel/Carousel";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="main-content" style={{ position: "relative" }}>
          <Carousel />
        </div>
        <Switch>
          <Route path="/" exact={true} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
