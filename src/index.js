import ReactDOM from 'react-dom';
import React from 'react';
// Import value to the right of `export default` inside of ./HelloWorld.js file
import HelloWorld from './HelloWorld';
// The name that comes after import will the variable name of the
// value imported from the file or packages that comes after `from`

const App = props => {
  return <div>
    <HelloWorld name="Mitch" />
    <HelloWorld name="Steve" bgColor="Violet" />
    <HelloWorld name="Basia" />
    <HelloWorld name="Aldo" />
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
