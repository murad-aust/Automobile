import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Details from './Components/Cars/Details';
import AddCar from './Components/AddCar/AddCar';
export const InfoContext = createContext();

function App() {
  const [info, setInfo] =useState({});
  return (
    <InfoContext.Provider value={[info, setInfo]} >
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/details'>
          <Details></Details>
        </Route>
        <Route path='/addCar'>
           <AddCar></AddCar>
        </Route>
      </Switch>
    </Router>
    </InfoContext.Provider>
  );
}

export default App;
