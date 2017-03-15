import React, {Component} from 'react'

export function Product (props) {
  const handleClick = function () {
    props.onClick(props.id)
  }

  return (
    <div
      style={{
        padding: '1rem',
        backgroundColor: props.selected ? 'LightGreen' : 'LightGrey'
      }}
      onClick={handleClick}
      className='Product'>
      <span>{props.name}</span> <span>(${props.price})</span>
    </div>
  )
}

export default class POS extends Component {
  constructor (props) {
    super(props)

    // Grabbing the initial products list from the passed in props
    this.state = {
      products: props.products
    }

    this.selectProduct = this.selectProduct.bind(this)
  }

  selectProduct (id) {
    const {products} = this.state;

    this.setState({
      products: products.map(
        product =>
          product.id === id ? toggleSelect(product) : product
      )
    });
  }

  priceTotal() {
    // filter all products that are selected
    // then sum all their price totals with reduce
    return this.state.products
      .filter(p => p.selected)
      .reduce((total, p) => p.price + total, 0)
  }

  render () {
    const {products} = this.state;

    return (
      <div
        style={{border: 'medium solid DeepPink'}}
        className="POS">
        {
          products.map(
            product => <Product
              onClick={this.selectProduct}
              key={product.id}
              {...product} />
          )
        }
        <p><strong>Total:</strong> { this.priceTotal() }</p>
      </div>
    )
  }
}

// returns a copy of a product object with a the selected property toggled
// from true to false and vice versa
function toggleSelect (product) {
  return Object.assign({}, product, {selected: !product.selected})
}
