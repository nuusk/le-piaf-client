import React, { Component } from 'react';
import Cart from '../../components/Cart/Cart';
import ProductList from '../../components/ProductList/ProductList';
import Header from '../../components/Header/Header'
import './Shop.css'

class Shop extends Component {
  constructor(props) {
    super(props);

    this.cartRef = React.createRef();
    this.addToCart=this.addToCart.bind(this);

    this.state = {
      currency: 'PLN'
    }
  }

  addToCart(product, size) {
    this.cartRef.current.addProduct(product, size);
    // console.log(product);
  }

  render() {
    return (
      <div className="Shop">
        <Header />
        <main>
          <Cart ref={this.cartRef} currency={this.state.currency}/>
          <ProductList addToCart={this.addToCart} currency={this.state.currency}/>
        </main>
      </div>
    );
  }
}

export default Shop;