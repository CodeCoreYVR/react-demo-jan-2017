import React, {Component} from 'react';

function Shape ({id, color = 'Blue', type = 'Square', onClick = () => {}}) {
  const handleClick = event => {
    // when the shape div gets clicked, call onClick callback
    // with information about the shape
    onClick({id, color, type})
    // this is alternative to just forwarding the event listener callback
    // instead we choose when & what happens with the callback passed to
    // Shape's onClick prop
  }

  return <div
    onClick={handleClick}
    style={{
      backgroundColor: color,
        height: '3rem',
        width: '3rem',
        borderRadius: type === 'circle' ? '999999px' : '0px'
    }}
    className='Shape'></div>;
}

function ShapeHolder ({shapes = [], onShapeClick = () => {}}) {
  return <div className="ShapeHolder">
    { shapes.map(shape => <Shape key={shape.id} {...shape} onClick={onShapeClick} />) }
  </div>
}

export default class ShapeMaker extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shapes: []
    }

    this.addShape = this.addShape.bind(this);
    this.removeShape = this.removeShape.bind(this);
  }

  addShape (event) {
    event.preventDefault();
    const {shapes} = this.state;

    this.setState({
      shapes: shapes.concat({
        // I'm adding an id to Shapes to make easy 
        id: shapes.length,
        type: this.refs.type.value,
        color: this.refs.color.value
      })
    })
  }

  removeShape ({id}) {
    const {shapes} = this.state;
    // removing a shape doesn't involve the DOM, because the shapes shown
    // on our page are based the array of objects we have in our state
    // instead we just the shape-like object from our shapes in array in our
    // state. On the rerender, react will no rerender the removed shape
    this.setState({
      shapes: shapes.filter(shape => shape.id !== id)
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
      <ShapeHolder onShapeClick={this.removeShape} shapes={this.state.shapes} />
    </div>
  }
}
