import './App.scss';
import './Filter.scss';
import ExportCode from './components/ExportCode';
import CustomColorPicker from './components/ColorPicker'
import React, { Component } from 'react';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fontSize: 16,
      fontFamily: "",
      fontEmphasis: 500,
      width: 150,
      height: 100,
      padding: 3,
      borderWidth: 1,
      borderRadius: 0,
      shadow: 0,
      backgroundColor: "",
      textColor: "",
      borderColor: "",
      opacity: 0,
      showCode: false

    }
    this.showCode = this.showCode.bind(this);
  }
  showCode() {
    this.setState(state => ({
        showCode: !state.showCode
    }));
  }
  
  /* functions to change button styling */
  fontSlider(e) {
    this.setState({fontSize: e.target.value});
    document.getElementById('generatedButton').style.fontSize = e.target.value + 'px';
  }
  fontSizeSlider(e) {
    this.setState({fontSize: e.target.value});
    document.getElementById('generatedButton').style.fontSize = e.target.value + 'px';
  }
  fontEmphasisSlider(e) {
    this.setState({fontEmphasis: e.target.value});
    document.getElementById('generatedButton').style.fontWeight = e.target.value;
  }
  widthSlider(e) {
    this.setState({width: e.target.value});
    document.getElementById('generatedButton').style.width = e.target.value + 'px';
  }
  heightSlider(e) {
    this.setState({height: e.target.value});
    document.getElementById('generatedButton').style.height = e.target.value + 'px';
  }
  paddingSlider(e) {
    this.setState({padding: e.target.value});
    document.getElementById('generatedButton').style.padding = e.target.value + 'px';
  }
  borderWidthSlider(e) {
    this.setState({borderWidth: e.target.value});
    document.getElementById('generatedButton').style.borderWidth = e.target.value + 'px';
  }
  borderRadiusSlider(e) {
    this.setState({borderRadius: e.target.value});
    document.getElementById('generatedButton').style.borderRadius = e.target.value + 'px';
  }
  borderShadowSlider(e) {
    this.setState({shadow: e.target.value});
    document.getElementById('generatedButton').style.boxShadow = '0 0px ' + e.target.value + 'px ' + e.target.value + 'px rgba(0,0,0,0.2)';
  }
  opacitySlider(e) {
    this.setState({opacity: e.target.value});
    document.getElementById('generatedButton').style.opacity = e.target.value + '%';
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
                  <button id="normal-effect">Button</button>
                </div>
                <div className="preset">
                  <button id="opacity-effect">Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="rounded-corners1-effect">Button</button>
                </div>
                <div className="preset">
                  <button id="rounded-corners2-effect">Button</button>
                </div>
              </div>
            </div>
          </div>
          <div className="presets card">
            <p>Other Presets</p>
            <div className="preset-container">
              <div className="preset-row">
                <div className="preset">
                  <button id="thin-border-effect">Button</button>
                </div>
                <div className="preset">
                  <button id="thick-border-effect">Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="hover-normal-fill-effect">Button</button>
                </div>
                <div className="preset">
                  <button id="hover-opaque-fill-effect">Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="shadow-effect">Button</button>
                </div>
                <div className="preset">
                  <button id="hover-shadow-effect">Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="hover-grow-effect">Button</button>
                </div>
                <div className="preset">
                  <button id="hover-shrink-effect">Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="hover-slide-right-effect">Button</button>
                </div>
                <div className="preset">
                  <button id="hover-slide-left-effect">Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="hover-rotate-right-effect">Button</button>
                </div>
                <div className="preset">
                  <button id="hover-rotate-left-effect">Button</button>
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
            {this.state.showCode ? <ExportCode fontSize={this.state.fontSize} 
            fontFamily = {this.state.fontFamily}
            fontEmphasis = {this.state.fontEmphasis}
            width = {this.state.width}
            height = {this.state.height}
            padding = {this.state.padding}
            borderWidth = {this.state.borderWidth}
            borderRadius = {this.state.borderRadius}
            shadow = {this.state.shadow}
            textColor = {this.state.textColor}
            borderColor = {this.state.borderColor}
            opacity = {this.state.opacity}
            backgroundColor = {this.state.backgroundColor} false/> : null }
          </div>
        </div>
        <div className="column right-column">
          <div className="filters three card">
            <p className="filterType">Font</p>
            <div className="filters-container">
              <div className="attribute">
                <p>Font Family</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.fontSize} onChange={(e) => this.fontSlider(e)} min="0" max="100"/>
                  <span className="range-slider__value">{this.state.fontSize}</span>
                </div>
              </div>
              <div className="attribute">
                <p>Font Weight</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.fontEmphasis} onChange={(e) => this.fontEmphasisSlider(e)} min="0" max="900" step="100"/>
                  <span className="range-slider__value">{this.state.fontEmphasis}</span>
                </div>
              </div>
              <div className="attribute">
                <p>Font Size</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.fontSize} onChange={(e) => this.fontSizeSlider(e)} min="0" max="100"/>
                  <span className="range-slider__value">{this.state.fontSize}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="filters three card">
            <p className="filterType">Sizing</p>
            <div className="filters-container">
              <div className="attribute">
                <p>Width</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.width} onChange={(e) => this.widthSlider(e)} min="0" max="500"/>
                  <span className="range-slider__value">{this.state.width}</span>
                </div>
              </div>
              <div className="attribute">
                <p>Height</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.height} onChange={(e) => this.heightSlider(e)} min="0" max="175"/>
                  <span className="range-slider__value">{this.state.height}</span>
                </div>
              </div>
              <div className="attribute">
                <p>Padding</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.padding} onChange={(e) => this.paddingSlider(e)} min="0" max="50"/>
                  <span className="range-slider__value">{this.state.padding}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="filters three card">
            <p className="filterType">Border</p>
            <div className="filters-container">
              <div className="attribute">
                <p>Border Width</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.borderWidth} onChange={(e) => this.borderWidthSlider(e)} min="0" max="10"/>
                  <span className="range-slider__value">{this.state.borderWidth}</span>
                </div>
              </div>
              <div className="attribute">
                <p>Border Radius</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.borderRadius} onChange={(e) => this.borderRadiusSlider(e)} min="0" max="15"/>
                  <span className="range-slider__value">{this.state.borderRadius}</span>
                </div>
              </div>
              <div className="attribute">
                <p>Shadow</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.shadow} onChange={(e) => this.borderShadowSlider(e)} min="0" max="100"/>
                  <span className="range-slider__value">{this.state.shadow}</span>
                </div>
              </div>              
            </div>
          </div>
          <div className="filters four card">
            <p className="filterType">Color</p>
            <div className="filters-container">
              <div className="attribute">
                <p>Background Color</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.fontSize} onChange={(e) => this.fontSlider(e)} min="0" max="100"/>
                  <span className="range-slider__value">{this.state.fontSize}</span>
                </div>
              </div>
              <div className="attribute">
                <p>Text Color</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.fontSize} onChange={(e) => this.fontSlider(e)} min="0" max="100"/>
                  <span className="range-slider__value">{this.state.fontSize}</span>
                </div>
              </div>
              <div className="attribute">
                <p>Border Color</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.fontSize} onChange={(e) => this.fontSlider(e)} min="0" max="100"/>
                  <span className="range-slider__value">{this.state.fontSize}</span>
                </div>
              </div>
              <div className="attribute">
                <p>Opacity</p>
                <div className="range-slider">
                  <input className="range-slider__range" type="range" value={this.state.opacity} onChange={(e) => this.opacitySlider(e)} min="0" max="100"/>
                  <span className="range-slider__value">{this.state.opacity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
