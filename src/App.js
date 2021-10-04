import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Service from './components/Service/Service';
import Admission from './components/Admission/Admission';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { createContext, useEffect, useState } from 'react';
import Success from './components/Success/Success';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

export const ServicesContext = createContext([]);

function App() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./music-school.json")
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <ServicesContext.Provider value={services}>
      <Router>
        <Header></Header>

        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/service">
            <Service showAll={true}></Service>
          </Route>

          <Route exact path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </Route>

          <Route exact path="/about">
            <About></About>
          </Route>

          <Route exact path="/admission">
            <Admission></Admission>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/success">
            <Success></Success>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </Router>
    </ServicesContext.Provider>
  );
}

export default App;
