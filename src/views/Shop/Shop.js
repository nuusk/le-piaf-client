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
  }

  addToCart(product) {
    this.cartRef.current.addProduct(product);
    // console.log(product);
  }

  render() {
    return (
      <div className="Shop">
        <Header />
        <main>
          <Cart ref={this.cartRef}/>
          <ProductList addToCart={this.addToCart}/>
        </main>
      </div>
    );
  }
}

export default Shop;