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
      backgroundColor: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      },
      textColor: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      },
      borderColor: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
      },
      opacity: 0,
      showCode: false,
      presetVisible: 'none'
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
    document.getElementById('generatedButton').style.boxShadow = '0 0px ' + e.target.value + 'px ' + e.target.value + 'px';
  }
  opacitySlider(e) {
    this.setState({opacity: e.target.value});
    document.getElementById('generatedButton').style.opacity = e.target.value + '%';
  }

  handleBackgroundColorChange = (color) => {
    this.setState({ backgroundColor: color.rgb })
    document.getElementById('generatedButton').style.backgroundColor = "rgba(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + "," + color.rgb.a + ")"
  };

  handleTextColorChange = (color) => {
    this.setState({ textColor: color.rgb })
    document.getElementById('generatedButton').style.color = "rgba(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + "," + color.rgb.a + ")"
  };

  handleBorderColorChange = (color) => {
    console.log("in the border", color)
    this.setState({ borderColor: color.rgb })
    document.getElementById('generatedButton').style.borderColor = "rgba(" + color.rgb.r + "," + color.rgb.g + "," + color.rgb.b + "," + color.rgb.a + ")"
  };

  /* Function to toggle between presets: */
  renderSwitch(presetVisible) {
    switch (presetVisible) {
      case 'normal-effect':
        return <button id="normal-effect">Button</button>;
      case 'opacity-effect':
        return <button id="opacity-effect">Button</button>;
      case 'rounded-corners1-effect':
        return <button id="rounded-corners1-effect">Button</button>;
      case 'rounded-corners2-effect':
        return <button id="rounded-corners2-effect">Button</button>;
      case 'thin-border-effect':
        return <button id="thin-border-effect">Button</button>;
      case 'thick-border-effect':
        return <button id="thick-border-effect">Button</button>;
      case 'hover-normal-fill-effect':
        return <button id="hover-normal-fill-effect">Button</button>;
      case 'hover-opaque-fill-effect':
        return <button id="hover-opaque-fill-effect">Button</button>;
      case 'shadow-effect':
        return <button id="shadow-effect">Button</button>;
      case 'hover-shadow-effect':
        return <button id="hover-shadow-effect">Button</button>;
      case 'hover-grow-effect':
        return <button id="hover-grow-effect">Button</button>;
      case 'hover-shrink-effect':
        return <button id="hover-shrink-effect">Button</button>;
      case 'hover-slide-right-effect':
        return <button id="hover-slide-right-effect">Button</button>;
      case 'hover-slide-left-effect':
        return <button id="hover-slide-left-effect">Button</button>;
      case 'hover-rotate-right-effect':
        return <button id="hover-rotate-right-effect">Button</button>;
      case 'hover-rotate-left-effect':
        return <button id="hover-rotate-left-effect">Button</button>;
      default:
        return <button id="generatedButton">Button</button>;
    }
  }

  render() {
    var buttonText = "Show CSS";
    if (this.state.showCode) {
      buttonText = "Hide CSS"
    }

    return (
      <div className="App">
        <div className="column left-column">
          <div className="presets card">
            <div className="highlight2"></div>
            <p className="filterType">Basic Presets</p>
            <div className="preset-container">
              <div className="preset-row">
                <div className="preset">
                  <button id="normal-effect" onClick={() => this.setState({ presetVisible: 'normal-effect' })}>Button</button>
                </div>
                <div className="preset">
                  <button id="opacity-effect" onClick={() => this.setState({ presetVisible: 'opacity-effect' })}>Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="rounded-corners1-effect" onClick={() => this.setState({ presetVisible: 'rounded-corners1-effect' })}>Button</button>
                </div>
                <div className="preset">
                  <button id="rounded-corners2-effect" onClick={() => this.setState({ presetVisible: 'rounded-corners2-effect' })}>Button</button>
                </div>
              </div>
            </div>
          </div>
          <div className="presets six card">
            <div className="highlight2"></div>
            <p className="filterType">Other Presets</p>
            <div className="preset-container">
              <div className="preset-row">
                <div className="preset">
                  <button id="thin-border-effect" onClick={() => this.setState({ presetVisible: 'thin-border-effect' })}>Button</button>
                </div>
                <div className="preset">
                  <button id="thick-border-effect" onClick={() => this.setState({ presetVisible: 'thick-border-effect' })}>Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="hover-normal-fill-effect" onClick={() => this.setState({ presetVisible: 'hover-normal-fill-effect' })}>Button</button>
                </div>
                <div className="preset">
                  <button id="hover-opaque-fill-effect" onClick={() => this.setState({ presetVisible: 'hover-opaque-fill-effect' })}>Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="shadow-effect" onClick={() => this.setState({ presetVisible: 'shadow-effect' })}>Button</button>
                </div>
                <div className="preset">
                  <button id="hover-shadow-effect" onClick={() => this.setState({ presetVisible: 'hover-shadow-effect' })}>Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="hover-grow-effect" onClick={() => this.setState({ presetVisible: 'hover-grow-effect' })}>Button</button>
                </div>
                <div className="preset">
                  <button id="hover-shrink-effect" onClick={() => this.setState({ presetVisible: 'hover-shrink-effect' })}>Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="hover-slide-right-effect" onClick={() => this.setState({ presetVisible: 'hover-slide-right-effect' })}>Button</button>
                </div>
                <div className="preset">
                  <button id="hover-slide-left-effect" onClick={() => this.setState({ presetVisible: 'hover-slide-left-effect' })}>Button</button>
                </div>
              </div>
              <div className="preset-row">
                <div className="preset">
                  <button id="hover-rotate-right-effect" onClick={() => this.setState({ presetVisible: 'hover-rotate-right-effect' })}>Button</button>
                </div>
                <div className="preset">
                  <button id="hover-rotate-left-effect" onClick={() => this.setState({ presetVisible: 'hover-rotate-left-effect' })}>Button</button>
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
            {this.renderSwitch(this.state.presetVisible)}
          </div>
          <div className="json-window card">
            <div className="showButton" onClick={this.showCode}>
                {buttonText}
            </div>
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
        <div className="column right-column" id="rightColumn">
          <div className="filters two card">
            <div className="highlight"></div>
            <p className="filterType">Font</p>
            <div className="filters-container">
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
            <div className="highlight"></div>
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
            <div className="highlight"></div>
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
          <div className="filters three card">
            <div className="highlight"></div>
            <p className="filterType">Color</p>
            <div className="filters-container">
              <div className="attribute">
                <p>Background Color</p>
                <div className="range-slider">
                <CustomColorPicker color="backgroundColor" backgroundColor={this.state.backgroundColor} handleBackgroundColorChange={this.handleBackgroundColorChange}/>
                </div>
              </div>
              <div className="attribute">
                <p>Text Color</p>
                <div className="range-slider">
                <CustomColorPicker color="textColor" textColor={this.state.textColor} handleTextColorChange={this.handleTextColorChange}/>
                </div>
              </div>
              <div className="attribute">
                <p>Border Color</p>
                <div className="range-slider">
                <CustomColorPicker color="borderColor" borderColor={this.state.borderColor} handleBorderColorChange={this.handleBorderColorChange}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
