import React, { Component } from 'react';
import './App.css';
import FlipCssTransition from './FlipCssTransition';
import FlipReactMotion from './FlipReactMotion';

class App extends Component {
  render() {
    return (
      <section className="app">
        <h1>CSS Classes</h1>
        <FlipCssTransition />
        <h1>React Motion</h1>
        <FlipReactMotion />
      </section>
    );
  }
}

export default App;
