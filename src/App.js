import './App.scss';
import './Filter.scss';
import ExportCode from './components/ExportCode';
import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontSize: 16,
      showCode: false
    }
    this.showCode = this.showCode.bind(this);
  }
  showCode() {
    this.setState(state => ({
        showCode: !state.showCode
    }));
  }
  fontSlider(e) {
    this.setState({fontSize: e.target.value});
    document.getElementById('generatedButton').style.fontSize = e.target.value + 'px';
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
            <button id="generatedButton">
              Button
            </button>
          </div>
          <div className="json-window card">
            <button onClick={this.showCode}>
                Show CSS
            </button>
            {this.state.showCode ? <ExportCode fontSize={this.state.fontSize} /> : null }
          </div>
        </div>
        <div className="column right-column">
          <div className="filters card">
            <p>Color filters</p>
            <div className="filters-container">
              <div className="range-slider">
                <input className="range-slider__range" type="range" value={this.state.fontSize} onChange={(e) => this.fontSlider(e)} min="0" max="100"/>
                <span className="range-slider__value">{this.state.fontSize}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
