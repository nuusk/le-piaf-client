import React, { Component } from 'react';
import Cart from '../components/Cart/Cart';
import ProductList from '../components/ProductList/ProductList';
import Header from '../components/Header/Header'


class Shop extends Component {
 

  render() {
    return (
      <div className="Shop">
        <Header />
        <Cart />
        <ProductList />
       
      </div>
    );
  }
}

export default Shop;