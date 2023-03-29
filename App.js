/*
title: Endofterm Assessment - Emil Fulford
author: Emily Fulford
studentnumber: 221075*/

import React from 'react';
import Navbar from './Navbar';
import BarChart from './Components/Maps';
import { useState } from 'react';
import { UserData } from '../Data';
import LineChart from './Components/Maps';

//navbar//

function App() {
  console.log(window.location)
  return <Navbar />
    
}


//charts//

function App() {

const [users] = useState ({
  labels: UserData.map((data) => data.year),
  datasets: [{
    label: 'Gained Users' ,
    data: UserData.map((data) => data.userGain)
  }],
  datasets: [{
    label: 'Lost Users' ,
    data: UserData.map((data) => data.userLost)
  }],
  datasets: [{
    label: 'Revenue Generated' ,
    data: UserData.map((data) => data.Revenue)
  }]
})

  return (
    <div className='App'>
      <div style={{width: 500}}>
        <BarChart chartData={users}/>
      </div>
      <div style={{width: 500}}>
        <LineChart chartData={users}/>
      </div>
      <div style={{width: 500}}>
        <PieChart chartData={users}/>
      </div>
    </div>
  );
};

//Hide button//

function App() {
  const [show, toggleShow] =
  useState(true);
  return (
    <div className='App'>
      <button onClick={() => toggleShow(!show)}>
      </button>
      {show && <h2>
        Hidden</h2>}
    </div>
  );
};

//Routing//

import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import navbar from "./Navbar"//
import landing from "./components/landing"
import maps from "./components/maps"

function App() {
  return (
    <Router>
      <navbar />
      <Switch>
        <Route path='/' exact component={landing} />
        <Route path='/maps' component={maps} />

      </Switch>
    </Router>
  );
}

export default App;