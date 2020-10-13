import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Container } from '@material-ui/core';
import Home from './Components/Home/Home';
import Reservation from './Components/Reservation/Reservation';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Hotel from './Components/Hotel/Hotel';



function App() {
  return (
    <div className="App">
      <Container>
      <Router>
      <Header></Header>
      <Switch>
      <Route exact path ="/">
        <Home></Home>
      </Route>
        <Route path="/reservation/:id">
          <Reservation/></Route>
          <Route  path="/hotels/:name"> 
          <Hotel></Hotel>
          </Route>
     <Route path="*">
         <NoMatch></NoMatch>
          </Route>
      
      
      </Switch>
      </Router>
      </Container>
    </div>
  );
}

export default App;
