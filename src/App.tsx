import firebase from "firebase";
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
import { Slideshow } from "./components/Slideshow";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyDsN4Mu3PsFGQ-QCs1C6DyLK-oWB7dGlj0",
  authDomain: "me-app-e86d3.firebaseapp.com",
  projectId: "me-app-e86d3",
  storageBucket: "me-app-e86d3.appspot.com",
  messagingSenderId: "270674781379",
  appId: "1:270674781379:web:b67563fe8f6a1cfe402e76",
  measurementId: "G-QC11N1VKY2",
};
firebase.initializeApp(firebaseConfig);

// Initialize Firebase

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
    if (pathname === "/") {
      window.scrollTo(0, document.body.scrollHeight);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      <Navigation />
      <div className="flex flex-col h-full items-center justify-center text-white bg-gradient-to-br from-gray-600 via-teal-700 to-gray-800">
        <Switch>
          <Route path="/" exact>
            <Slideshow />
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
