import React, { createContext, useState } from 'react';

import './App.css';
import Header from './Components/Header/Header';
import { Container } from '@material-ui/core';
import Home from './Components/Home/Home';
import Reservation from './Components/Reservation/Reservation';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import Hotel from './Components/Hotel/Hotel';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();



function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({})
 
  return (
   
   <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
     <div className='App'>
      <Container>
      <Router>
      <Header></Header>
  <h3 style={{color:"white"}}>Email: {loggedInUser.email}</h3>
      <Switch>
      <Route exact path ="/">
        <Home></Home>
      </Route>
        <Route path="/reservation/:id">
          <Reservation/></Route>
         
          <PrivateRoute exact path="/hotels/:name">
          <Hotel></Hotel>
            </PrivateRoute> 
          
              <Route path="/login">
            <Login /> </Route>
     <      Route path="*">
           <NoMatch></NoMatch>
          </Route>
      </Switch>
      </Router>
      </Container>
      </div>
      </UserContext.Provider>
    
  );
}

export default App;
