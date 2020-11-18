import logo from './logo.svg';
import './App.scss';
import './Filter.scss';
import React, { useState, Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      test: 28
    }
  }

  render() {
    return (
      <div className="App">
        <div className="column left-column">
          <div className="presets card">
            <p>Basic Presets</p>
            <div className="preset-container">
              <div className="preset-row">
                <div className="preset">
                  <button>click</button>
                </div>
                <div className="preset">
                  <button>click</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button>click</button>
                </div>
                <div className="preset">
                  <button>click</button>
                </div>
              </div>
            </div>
          </div>
          <div className="presets card">
            <p>Other Presets</p>
            <div className="preset-container">
              <div className="preset-row">
                <div className="preset">
                  <button>click</button>
                </div>
                <div className="preset">
                  <button>click</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button>click</button>
                </div>
                <div className="preset">
                  <button>click</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column center-column">
          <div className="title">
            CSS Generator
          </div>
          <div className="button-window card">
            <button>
              Click me
            </button>
          </div>
          <div className="json-window card">
            This is text\nwith a stdfdf\nsdfsdfsdf\nsdfdsfsdfsd\n
          </div>
        </div>
        <div className="column right-column">
          <div className="filters card">
            <p>Color filters</p>
            <div className="filters-container">
              <div className="range-slider">
                <input className="range-slider__range" type="range" value={this.state.test} onChange={(e) => this.setState({test: e.target.value})} min="0" max="100"/>
                <span className="range-slider__value">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
