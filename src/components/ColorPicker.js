import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: '241',
      g: '112',
      b: '19',
      a: '1',
    }
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };


  handleColor = () => {
    if(this.props.color === "backgroundColor"){
      return this.props.backgroundColor
    } else if (this.props.color === "textColor"){
      return this.props.textColor 
    } else if (this.props.color === "borderColor"){
      return this.props.borderColor 
    }
  }

  handleOnChange = () => {
    if(this.props.color === "backgroundColor"){
      return this.props.handleBackgroundColorChange
    } else if (this.props.color === "textColor"){
      return this.props.handleTextColorChange
    } else if (this.props.color === "borderColor"){
      return this.props.handleBorderColorChange
    }
  }

  handlebackground = () => {
    if(this.props.color === "backgroundColor"){
      return `${this.props.backgroundColor.r }, ${ this.props.backgroundColor.g }, ${ this.props.backgroundColor.b }, ${ this.props.backgroundColor.a }`
    } else if (this.props.color === "textColor"){
      return `${this.props.textColor.r }, ${ this.props.textColor.g }, ${ this.props.textColor.b }, ${ this.props.textColor.a }`
    } else if (this.props.color === "borderColor"){
      return `${this.props.borderColor.r }, ${ this.props.borderColor.g }, ${ this.props.borderColor.b }, ${ this.props.borderColor.a }`
    }
  }

  render() {
    var newTop = 0;
    if (document.getElementById('rightColumn')) {
      newTop = -document.getElementById('rightColumn').style.top + 100;
    }
    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.handlebackground() })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
          top: newTop,
        },
        cover: {
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          width: '100vw',
          z: 3
        },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>         
          <SketchPicker color={this.handleColor()} onChange={this.handleOnChange()}/>
        </div> : null }

      </div>
    )
  }
}

export default ColorPicker

