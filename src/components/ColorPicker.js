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

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
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
        },
        cover: {
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

