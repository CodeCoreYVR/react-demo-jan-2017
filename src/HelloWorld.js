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
export default props => {
  // you can declare inline styles for components with a plain js object
  // CSS property names will the objects properties and should named
  // in camelCase & property values should always be strings
  const styles = {
    backgroundColor: props.bgColor || 'Tomato',
    color: 'Aquamarine',
    fontFamily: 'Helvetica',
    fontWeight: 100,
    fontSize: '2em',
    padding: '0.5rem'
  };

  // Pass the styles object as prop to any component you would style like
  // below
  return <p style={styles} className='styling pimpin'>
    Hello World and Hello {props.name}
  </p>;
}
