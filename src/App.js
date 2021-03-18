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
import NewCar from './Components/NewCar/NewCar';
export const CarContext = createContext();

function App() {
  const [car, setCar] =useState({});
  return (
    <CarContext.Provider value={[car, setCar]} >
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
        <Route path='/newCar'>
           <NewCar></NewCar>
        </Route>
      </Switch>
    </Router>
    </CarContext.Provider>
  );
}

export default App;
