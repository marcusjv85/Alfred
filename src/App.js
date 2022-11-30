import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import MainBody from './components/MainBody';
import News from './components/News';
import Weather from './components/Weather';
import Sports from './components/Sports';
import Science from './components/Science';
import Dash from './components/Dash';


function App() {
  const[display, setDisplay]= useState("news")

  function updateState(data){
   console.log('The data from nav bttn: ', data)
   setDisplay(data)
  }
  
  // Used to dynamically set then Component based on the Navbar selection
  let component = display

  const compName = {
    news: News,
    weather: Weather,
    sports: Sports,
    science: Science,
    home: Dash
  }

  let Rendered = compName[component]
  // Used to dynamically set then Component based on the Navbar selection

  

  return (
    <div className="App">
      <Navbar updateState={(data)=>{updateState(data)}}/>
      <MainBody>
        <Rendered />
      </MainBody>
    </div>
  );
}

export default App;
