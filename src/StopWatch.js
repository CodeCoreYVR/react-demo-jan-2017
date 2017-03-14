import React, {Component} from 'react';

export default class StopWatch extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0
    };

    // start method is a callback for the Start button
    // onClick event. Do not forget to bind it!
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.reset = this.reset.bind(this);
  }

  start (event) {
    //const count = this.state.count;
    // be careful when creating a variable that will be part of clojure
    // on callback
    // this variable will not be reassigned with the latest value of the state
    // const {count} = this.state;

    // we check if there's already a setInterval id on the timerId
    // property. If there is one, do not allow the creating of another
    // setInterval
    // this is how we prevent the creation of multiple setIntervals at a
    // time
    if (!this.timerId) {
      this.timerId = setInterval(
        () => { this.setState({count: this.state.count + 1}) },
        1000
      );
    }
  }

  stop (event) {
    clearInterval(this.timerId);
    this.timerId = null;
  }

  reset (event) {
    this.stop();
    this.setState({count: 0});
  }

  render () {
    return (
      <div className="StopWatch" ref={node => console.log(node)}>
        {/* the ref prop can also take a callback that will receive
          the DOM node when it is mounted in the browser */}
        <strong>Count: </strong> {this.state.count} <br />
        {/* ref is a special prop availabe on any node
            it can take a string. when used in this way, the DOM node
            will become available as a property of this.refs
            (e.g. the node of the Start button is available on this.refs.startButton)
           */}
        <button
          ref="startButton"
          onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}
