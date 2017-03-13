import React from 'react';

// This will be a Shape component. It will take a type and a
// color prop:
// - type: defines whether it is a circle or a square
// - color: defines its backgroundColor
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
