import ReactDOM from 'react-dom';
import React from 'react';
// Import value to the right of `export default` inside of ./HelloWorld.js file
import HelloWorld from './HelloWorld';
// The name that comes after import will the variable name of the
// value imported from the file or packages that comes after `from`
import Square from './Square'

const App = props => {
  const styles = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  };
  return <div style={styles}>
    <HelloWorld name="Mitch" />
    <HelloWorld name="Steve" bgColor="Violet" />
    <HelloWorld name="Basia" />
    <HelloWorld name="Aldo" />
    <Square />
    <Square bgColor='HotPink'/>
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
