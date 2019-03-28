import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ClassDemo from './class/ClassDemo'
import HookDemo from './hook/HookDemo'

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
