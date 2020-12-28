import React, { useEffect } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import About from "./components/About";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

function App() {
  return (
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  );
}

function Homepage() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navigation />
      <div className="flex flex-col h-full items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
        <Switch>
          <Route path="/" exact>
            <h1>First page</h1>
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/technologies" exact>
            <h1>Technologies</h1>
          </Route>
          <Redirect to="/" />
        </Switch>
      </div>
    </>
  );
}

export default App;
