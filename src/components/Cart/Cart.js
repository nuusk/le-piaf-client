import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'bluza',
          price: '10'
        },
        {
          id: 2,
          name: 'sweter',
          price: '30'
        },
        {
          id: 3,
          name: 'spodnie',
          price: '4'
        }
      ],
      currency: 'PLN',
      totalCount: 0
    };
  }

  addproduct(e, newproduct) {
    this.setState(prevState => ({
      products: [...prevState.products, newproduct],
      totalCount: prevState.totalCount + 1
    }));
  }

  removeproduct(e, productId) {
    let removedproductIndex;;
    this.state.products.some((product, index)=>{
      if (product.id === productId) {
        removedproductIndex = index;
        return true;
      }
      return false; //?????
    });
    if (typeof productId !== 'undefined') {
      this.setState(prevState => {
        let newproductList = prevState.products.slice();
        newproductList.splice(removedproductIndex, 1);
        return {products: newproductList};
      });
    }
  }

  render() {
    const products = this.state.products.map(product => 
      <li key={product.id}>
        <div className="product-name">{product.name}</div>
        <div className="product-price">{product.price}</div>
      </li>
    );
    return (
      <div className="Cart">
        {
          (this.state.products.length !== 0) ? products : <div className="message">Cart is empty.</div>
        }
      </div>
    );
  }
}

export default Cart;