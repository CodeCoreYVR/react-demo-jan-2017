import React from 'react';
import HelloWorld from './HelloWorld'


const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];

// The Greetings component is going an array of names as prop, names.
// (e.g. ['Artem', 'Basia', 'Fernando', 'Bernardo'])
// It's going generate a list of greetings for each name
export default props => {
  const colors = ['Red', 'Blue', 'Green', 'Pink'];
  const helloWorlds = props.names.map(
    name => <HelloWorld name={name} bgColor={sample(colors)} />
  );

  return <div>
    { helloWorlds }
  </div>
}
