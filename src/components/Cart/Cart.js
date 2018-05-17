import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      totalCount: 0,
      cartOpened: false
    };

    this.getPrice=this.getPrice.bind(this);
  }

  addProduct(newProduct) {
    let alreadyExists = false;
    let alreadyExistingIndex = null;
    this.state.products.some((product, index) => {
      if (product._id === newProduct._id) {
        alreadyExists = true;
        alreadyExistingIndex = index;
        return true;
      }
    })
    if (alreadyExists) {
      console.log(alreadyExistingIndex);
      let newState = this.state.products;
      newState[alreadyExistingIndex].quantity++;
      this.setState({ products: newState });
    } else {
      newProduct.quantity = 1;
      this.setState(prevState => ({
        products: [...prevState.products, newProduct],
        totalCount: prevState.totalCount + 1
      }));
    }
  }

  removeProduct(e, productId) {
    let removedProductIndex;;
    this.state.products.some((product, index)=>{
      if (product._id === productId) {
        removedProductIndex = index;
        return true;
      }
      return false;
    });
    if (typeof productId !== 'undefined') {
      this.setState(prevState => {
        let newproductList = prevState.products.slice();
        newproductList.splice(removedProductIndex, 1);
        return {products: newproductList};
      });
    }
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

  render() {
    const products = this.state.products.map((product, index) => 
      <li className="cart-product" key={index}>
        <img src={product.imageUrl} alt='' />
        <div className="product-name">{product.name}</div>
        <div className="product-price">{this.getPrice(product)}</div>
        <div className="product-amount">{product.quantity} </div>
        <div className="product-size">{product.size}</div>
      </li>
    );
    return (
      <div className="Cart">
      <div onClick={()=>{this.setState({cartOpened: !this.state.cartOpened})}} className="toggle-cart">
        <span className="toggle-icon" />
        <span className="toggle-text">{this.state.cartOpened ? `hide cart`:`show cart`}</span>
      </div>
          <div className={`cart-products ${this.state.cartOpened ? 'opened':'closed'}` } >
            {
              (this.state.products.length !== 0) ?
              products
              :<div className="message">Cart is empty...</div>
            }
          </div>
      </div>
    );
  }
}

export default Cart;