import React, { Component } from 'react';
import Cart from '../../components/Cart/Cart';
import ProductList from '../../components/ProductList/ProductList';
import Header from '../../components/Header/Header';
import Sorter from '../../components/Sorter/Sorter';

import './Shop.css'

class Shop extends Component {
  constructor(props) {
    super(props);

    this.cartRef = React.createRef();
  
    this.state = {
      currency: 'PLN',
      sortingCategory: 'name',
      sortingDirection: 'ascending'
    };

    this.addToCart=this.addToCart.bind(this);
    this.handleSortingOptionChange=this.handleSortingOptionChange.bind(this);
  }

  addToCart(product, size) {
    this.cartRef.current.addProduct(product, size);
  }

  handleSortingOptionChange(event) {
    event.persist();
    this.setState((prevState)=>{
      if (event.target.name === 'sorting-category')
        return { sortingCategory: event.target.value };
      else if (event.target.name === 'sorting-direction')
        return { sortingDirection: event.target.value };
    }, ()=>{
    //   // this.props.handleSortingOptionChange(this.state);
      console.log(this.state);
    });
  }

  render() {
    return (
      <div className="Shop">
        <header>
          <Header />
        </header>
        <main>
          <Sorter 
            handleSortingOptionChange={this.handleSortingOptionChange}
          />
          <Cart 
            ref={this.cartRef} 
            currency={this.state.currency}
          />
          <ProductList 
            addToCart={this.addToCart} 
            currency={this.state.currency}
            sortingCategory={this.state.sortingCategory}
            sortingDirection={this.state.sortingDirection}
          />
        </main>
      </div>
    );
  }
}

export default Shop;