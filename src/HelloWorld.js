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
/*
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
*/

// in class-based React components, props is a property of this
// this style of component must extend from React.Component
export default class HelloWorld extends React.Component {
  constructor (props) {
    // Always call super with props
    // super will call the same name method of the parent class
    // in this, super is calling the constructor defined in React.Component
    super(props);
    // Always call super before doing any changes to this

    //👇 set initial state
    this.state = {
      hovered: false
    };

    // bind event handlers and callbacks in the constructor
    this.handleLeave = this.handleLeave.bind(this);
  }
  handleLeave (event) {
    // as in regular event listeners with .addEventListener,
    // React event callbacks will also receive an event object
    this.setState({hovered: false});
  }
  // this style of component requires at the very minimum
  // a render method which returns JSX (or, a React element) just
  // like function-based components
  render() {
    const styles = {
      backgroundColor: this.props.bgColor || 'Tomato',
      color: 'Aquamarine',
      fontFamily: 'Helvetica',
      fontWeight: 100,
      fontSize: '2em',
      padding: '0.5rem'
    };

    const greeting = this.state.hovered ? 'Bye' : 'Hello';

    return (
      <p
        onMouseEnter={() => {
          console.log('Mouse Entered');
          // Only do state changes with the method this.setState
          // .setState takes an object as its first argument that
          // will be merged with the state object in this.state
          this.setState({hovered: true}, function () {
            // .setState can also take a callback as a second argument
            // it will be called once the state change is complete
            console.log('State change complete! 🛠')
          });
          // this.setState is an asynchronous function
          // do not write code immediately after it that depends on the state
        }}
        onMouseLeave={this.handleLeave/*.bind(this) avoid binding inline because it creates
          a function everytime render is called (and, it's called often)*/}
        style={styles}
        className='styling pimpin'>
        {greeting} World and {greeting} {this.props.name}
      </p>
    )
  }
}





















/* */
