import React, { Component } from 'react';
import './App.css';
import ClassDemo from './class/ClassDemo'
import HookDemo from './hook/Hook'

class App extends Component {

  render() {
    const hook = window.location.href;
    return (
      <div className="App">
      {!hook.includes('/?h') ? 
       <ClassDemo/>
       :
       <HookDemo/>}
      </div>
    );
  }
}

export default App;
