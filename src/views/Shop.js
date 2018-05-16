import React, { Component } from 'react';
import Cart from '../components/Cart/Cart';
import ProductList from '../components/ProductList/ProductList';

class Shop extends Component {
  render() {
    return (
      <div className="Shop">
        <Cart />
        <ProductList />
      </div>
    );
  }
}

export default Shop;