import React, { Component } from 'react';
import './ProductList.css'
import Product from '../Product/Product';
import ProductModal from '../ProductModal/ProductModal'

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      selectedProduct: null,
      modalOpened: false
    }

    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.getPrice = this.getPrice.bind(this);
  }
    
  componentDidMount() {
    fetch('http://localhost:5000/api/products/', {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(blob => blob.json())
      .then(data => {
        this.setState({products: data})
        // console.log(data[0]._id);
      });
  }

  closeModal() {
    this.setState({
      modalOpened: false
    });
    setTimeout(function(){
      this.setState({
        selectedProduct: null
      });
    }.bind(this), 300)
  }

  handleClick(selectedProductIndex) {
    this.setState({
      modalOpened: true,
      selectedProduct: selectedProductIndex
    });
  }

  getPrice(product) {
    let amount;
    product.prices.some(price => {
      if (price.currency === this.props.currency) {
        amount = price.amount.toFixed(2);
        return true;
      }
      return false;
    });
    return `${amount} ${this.props.currency}`;
  }

  handleAddToCart(productIndex, productSize) {
    this.props.addToCart(this.state.products[productIndex], productSize);
  }

  render() {
    const products = this.state.products.map((product, index) => 
        <Product
          key={index}
          index={index}
          handleClick={this.handleClick}
          name={product.name}
          imageUrl={product.imageUrl}
          price={this.getPrice(product)}
          addToCart={this.handleAddToCart}
        />
    );
    return (
      <div className="ProductList">
        { 
          (this.state.products.length !== 0) ?
          products : <span>Shop is closed!</span>
        }
        <ProductModal 
          modalOpened={this.state.modalOpened}
          closeModal={this.closeModal}
          products={this.state.products}
          selectedProduct={this.state.products[this.state.selectedProduct]}
          getPrice={this.getPrice}
          handleAddToCart={this.handleAddToCart}
        />
      </div>
    );
  }
}

export default ProductList;