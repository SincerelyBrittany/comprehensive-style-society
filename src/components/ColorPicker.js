import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'

class ColorPicker extends React.Component {
  state = {
    displayColorPicker: false,
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  render() {

    const styles = reactCSS({
      'default': {
        color: {
          width: '36px',
          height: '14px',
          borderRadius: '2px',
          background: `rgba(r: '241',
          g: '112',
          b: '19',
          a: '1',)`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        // popover: {
        //   position: 'absolute',
        //   zIndex: '2',
        // },
        // cover: {
        //   top: '0px',
        //   right: '0px',
        //   bottom: '0px',
        //   left: '0px',
        // },
      },
    });

    return (
      <div>
        <div style={ styles.swatch } onClick={ this.handleClick }>
          <div style={ styles.color } />
        </div>
        { this.state.displayColorPicker ? <div>
          <div onClick={ this.handleClose }/>
          {this.props.color === "backgroundColor" ?
               <SketchPicker backgroundColor={ this.props.backgroundColor } onChange={ this.props.handleBackgroundColorChange } />
        : <SketchPicker textColor={ this.props.textColor } onChange={ this.props.handleTextColorChange } /> }

        </div> : null }

      </div>
    )
  }
}

export default ColorPicker