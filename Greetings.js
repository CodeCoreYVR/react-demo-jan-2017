import React from 'react';
import HelloWorld from './HelloWorld'

// The Greetings component is going an array of names as prop, names.
// (e.g. ['Artem', 'Basia', 'Fernando', 'Bernardo'])
// It's going generate a list of greetings for each name
export default props => {
  const helloWorlds = props.names.map(
    name => <HelloWorld name={name} />
  );

  return <div>
    { helloWorlds }
  </div>
}
