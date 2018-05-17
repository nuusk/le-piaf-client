import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false
    }

    this.handleClick=this.handleClick.bind(this);
    this.handleAddToCart=this.handleAddToCart.bind(this)
  }


  handleClick() {
    // pass the index of the Product in the global array (of Products)
    this.props.handleClick(this.props.index);
  }

  handleAddToCart() {
    this.props.addToCart(this.props);
  }

  render() {
    return (
      <div className="Product" onClick={this.handleClick}>
        <div className="card-wrapper">
          <div className="tab">{this.props.name}</div>
          <div className="info">
            <img src={this.props.imageUrl} alt='' onLoad={this.appear}/>
            <h2>{this.props.price}</h2>
          </div>
          <button onClick={this.handleAddToCart}> add to cart </button>
        </div>
      </div>
    );
  }
}

export default Product;