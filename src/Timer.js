import React, {Component} from 'react';

// To extends from Component instead of React.Component,
// import as above
export default class Timer extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentTime: new Date().toString()
    };

    this.updateTime = this.updateTime.bind(this);
  }

  updateTime () {
    this.setState({currentTime: new Date().toString()})
  }

  // Lifecycle methods are special methods like render that
  // will be called by React at a specified time

  // 👇 will be called when the component is finally shown on the page
  componentDidMount () {
    // setInterval returns an integer that represents its id
    // we can use to cancel with the function clearInterval
    this.timerId = setInterval(this.updateTime, 1000);
    // in this case, we assign it to a property of this, timerId.
    // that way we can use in all our methods of this class
  }

  // 👇 will be called when a component is destroyed, leaves the pages,
  // is no longer a child of a parent component, etc
  componentWillUnmount () {
    clearInterval(this.timerId);
  }

  render () {
    return (
      <h2>Current time: { this.state.currentTime }</h2>
    )
  }
}
