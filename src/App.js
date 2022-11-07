import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Courses from "./components/Courses";
import Contact from "./components/contact";
import Enrollment from "./components/Enrollment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <NavBar />
                  <Home />
                  <About />
                  <Courses />
                  <Contact />
                </>
              );
            }}
          ></Route>
          <Route path="/enroll">
            <Enrollment />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
