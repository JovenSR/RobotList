import React, { Component } from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Robot from './components/robot';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home/>
      </div>
    );
  }
}

export default App;