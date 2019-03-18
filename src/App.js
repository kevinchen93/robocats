import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import './App.css';
import './stylesheets/main.scss';


class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
