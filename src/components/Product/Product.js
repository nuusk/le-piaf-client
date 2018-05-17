import React, { Component } from 'react';
import './Product.css';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
      selectedSize: 'L'
    }

    this.handleClick=this.handleClick.bind(this);
    this.handleAddToCart=this.handleAddToCart.bind(this)
  }

  handleClick() {
    // pass the index of the Product in the global array (of Products)
    this.props.handleClick(this.props.index);
  }

  handleAddToCart() {
    this.props.addToCart(this.props.index, this.state.selectedSize);
  }

  render() {
    return (
      <div className="Product">
        <div className="card-wrapper" onClick={this.handleClick}>
          <div className="tab">{this.props.name}</div>
          <div className="info">
            <img src={this.props.imageUrl} alt='' onLoad={this.appear}/>
          </div>
          <div className="product-price">{this.props.price}</div>
        </div>
        <button className="product-button" onClick={this.handleAddToCart}>ADD TO CART</button>
        
      </div>
    );
  }
}

export default Product;