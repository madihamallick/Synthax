import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Teams from "./Components/Teams/Teams";
// import Speaker from "./Components/Speaker/Speaker";
import Timeline from "./Components/Timeline/Timeline";
import About from "./Components/About/About";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/Projects">
            <Projects />
          </Route>
        </Switch>
        <Switch>
          <Route exact path="/Synthax">
            <Banner />
            <About />
            <Timeline />
            <Faq />
            <Teams />
            {/* <Speaker /> */}
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
