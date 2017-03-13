import React from 'react';
import Shape from './Shape';

/*
export default props => {
  // You can also inline the style object directly into
  // jsx as long as you put the object inside { ... }
  return <div style={{
    backgroundColor: props.bgColor || 'Blue',
    height: '3rem',
    width: '3rem'
  }} className='square'></div>;
}
*/

export default function (props) {
  // Using the spread operator, we can pass all properties of an
  // object as props to a component
  // In the case below, we hand over all props to our child component
  return <Shape type="square" {...props} />
}
