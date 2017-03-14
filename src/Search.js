import React, {Component} from 'react';

export default class Search extends Component {
  constructor (props) {
    super (props);

    this.state = {
      inputText: ''
    }

    this.filter = this.filter.bind(this);
  }

  filter (event) {
    // Just like in any event listener, we can get the target node from
    // the event object
    console.log(event.target.value);

    this.setState({
      inputText: event.target.value
    });
  }

  render () {
    const {names = []} = this.props;
    return <div className="Search">
      <input type="text" onChange={this.filter}/>
      <ul>
        {
          names.filter(
            (name, index) => {
              // /ste/
              // transform the inputed text as a regular expression
              // then check if that matches the names inside this array with
              // the .test method of regular expression
              return new RegExp(this.state.inputText).test(name)
            }
          ).map(
            // the key property is special property used by react with
            // arrays of components that it must render
            // the key should uniquely identify the component (e.g. a
            // id of Question model)
            // it used by React as optimization to compare components in a
            // list without having to compare the objects themselves which
            // is an expensive operation
            (name, index) =>
              <li key={index} data-index={index}>
                { name }
              </li>
          )
        }
        { /* stuff ??? profit */ }
      </ul>
    </div>
  }
}
