import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./header/Header";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
