import React, {Component} from 'react';

function Shape ({color = 'Blue', type = 'Square'}) {
  return <div
    style={{
      backgroundColor: color,
        height: '3rem',
        width: '3rem',
        borderRadius: type === 'circle' ? '999999px' : '0px'
    }}
    className='Shape'></div>;
}

function ShapeHolder ({shapes = []}) {
  return <div className="ShapeHolder">
    { shapes.map((shape, i) => <Shape key={i} {...shape} />) }
  </div>
}

export default class ShapeMaker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shapes: []
    }

    this.addShape = this.addShape.bind(this);
  }

  addShape (event) {
    event.preventDefault();
    const {shapes} = this.state;

    this.setState({
      shapes: shapes.concat({
        type: this.refs.type.value,
        color: this.refs.color.value
      })
    })
  }

  render () {
    return <div className="ShapeMaker">
      <form onSubmit={this.addShape}>
        <h1>Shape Form</h1>
        <div>
          <label>Type</label>
          <select ref="type">
            <option value="circle">Circle</option>
            <option value="square">Square</option>
          </select>
        </div>
        <div>
          <label>Color</label>
          <input type="text" ref="color"/>
        </div>
        <input type="submit" value="Submit"/>
      </form>

      <h1>Shape Holder</h1>
      <ShapeHolder shapes={this.state.shapes} />
    </div>
  }
}
