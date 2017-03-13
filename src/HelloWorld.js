// Component modules always need to import the React package
import React from 'react';

/*
const HelloWorld = function (props) {
  return React.createElement(
    'p', {className: 'styling pimpin'}, `Hello World and Hello ${props.name}!`
  );
}
*/

// When creating a component module, do not forget to export your
// react component as default
export default props =>
  <p className='styling pimpin'>Hello World and Hello {props.name}</p>;
