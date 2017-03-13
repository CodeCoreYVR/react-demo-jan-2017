import React from 'react';
import Square from  './Square';

export default props => {
  // You can also inline the style object directly into
  // jsx as long as you put the object inside { ... }
  return <div style={{
    backgroundColor: props.bgColor || 'Orange',
    height: '5rem',
    width: '15rem',
    display: 'flex',
    flexFlow: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }} className='square'>
    <Square />
    <Square />
    <Square />
  </div>;
}
