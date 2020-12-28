import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="flex flex-col h-full items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
        <Switch>
          <Route path="/" exact>
            <h1>First page</h1>
          </Route>
          <Route path="/about" exact>
            <h1>About me</h1>
          </Route>
          <Route path="/projects" exact>
            <h1>My projects</h1>
          </Route>
          <Route path="/technologies" exact>
            <h1>Technologies</h1>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
