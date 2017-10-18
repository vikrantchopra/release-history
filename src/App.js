import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AddRelease from './AddRelease';
import ShowReleases from './ShowReleases';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={{ padding: '3px' }} className="ui-g-12">
          <div style={{ padding: '3px' }} className="ui-g-4">
            <AddRelease />
          </div>
          <div style={{ padding: '3px' }} className="ui-g-8">
            <ShowReleases />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
