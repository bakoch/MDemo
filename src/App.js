import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassDemo from './class/classDemo'
import HookDemo from './hook/hookDemo'

class App extends Component {
  render() {
    return (
      <div className="App">
       <ClassDemo/>
       <h1>Hooks</h1>
       <HookDemo/>
      </div>
    );
  }
}

export default App;
