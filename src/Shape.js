import React from 'react';

// This will be a Shape component. It will take a type and a
// color prop:
// - type: defines whether it is a circle or a square
// - color: defines its backgroundColor
/*
export default props => {
  return <div style={{
    // Check and use the color prop, otherwise check and use the bgColor prop,
    // otherwise use the default 'Blue' color
    backgroundColor: props.color || props.bgColor || 'Blue',
    height: '3rem',
    width: '3rem',
    borderRadius: props.type === 'circle' ? '999999px' : '0px'
  }} className='square'></div>;
}
*/

/* 👇 version where styles is passed as a variable
export default props => {
  const styles = {
    backgroundColor: props.color || 'Blue',
    height: '3rem',
    width: '3rem',
    borderRadius: props.type === 'circle' ? '999999px' : '0px'
  }
  return <div style={styles} className='square'></div>;
}
*/

const COLORS = ['Magenta', 'Yellow',  'Cyan'];

export default class Shape extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      colorsIndex: 0
    }

    // do not forget to bind methods used as event handlers or callbacks
    this.cycleColor = this.cycleColor.bind(this);
  }

  colors () {
    return this.props.colors || COLORS;
  }

  cycleColor (event) {
    // we can freely read from this.state
    const {colorsIndex} = this.state;

    // but, we must use this.setState to write this.state
    this.setState({
      // here we're using the previous value the state property
      // colorsIndex to calculate the next one
      colorsIndex: (colorsIndex + 1) % this.colors().length
    })
  }

  render () {
    // assign props to a variable via destructuring
    const {props} = this;

    return <div
      onClick={this.cycleColor}
      style={{
      backgroundColor: this.colors()[this.state.colorsIndex],
      height: '3rem',
      width: '3rem',
      borderRadius: props.type === 'circle' ? '999999px' : '0px'
    }} className='square'></div>;
  }
}



















/* */
