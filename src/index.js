import ReactDOM from 'react-dom';
import React from 'react';
// Import value to the right of `export default` inside of ./HelloWorld.js file
import HelloWorld from './HelloWorld';
// The name that comes after import will the variable name of the
// value imported from the file or packages that comes after `from`
import Square from './Square';
import Rectangle from './Rectangle';
import Shape from './Shape';
import Greetings from './Greetings';
import Timer from './Timer';
import StopWatch from './StopWatch';
import Search from './Search';
import ShapeMover from './ShapeMover';

const App = props => {
  const styles = {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    marginBottom: '100vh'
  };

   const names = [
     'Artem', 'Basia', 'Fernando', 'Bernardo', 'Steve',
     'Mike', 'Mitch', 'Andrew', 'John', 'Max', 'Nichole'
   ]

  return <div style={styles}>
    <HelloWorld name="Mitch" />
    <HelloWorld name="Steve" bgColor="Violet" />
    <HelloWorld name="Basia" />
    <HelloWorld name="Aldo" />
    <Square />
    <Square bgColor='HotPink'/>
    <Rectangle />
    <Shape type="circle" color="Salmon" />
    <Shape type="square" colors={["Yellow", "Pink", "Aquamarine", "Violet"]} />
    <Greetings names={['Artem', 'Basia', 'Fernando', 'Bernardo', 'Steve']} />
    <Timer />
    <StopWatch />
    <Search names={names} />
    <ShapeMover />
  </div>
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
