import React from 'react';

export default props => {
  // You can also inline the style object directly into
  // jsx as long as you put the object inside { ... }
  return <div style={{
    backgroundColor: props.bgColor || 'Blue',
    height: '3rem',
    width: '3rem'
  }} className='square'></div>;
}
