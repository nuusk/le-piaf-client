import React, { Component } from 'react';
import './ProductList.css'
import Product from '../Product/Product';
import ProductModal from '../ProductModal/ProductModal'

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        {
          name: 'Christmas Bow Tie',
          imageUrl: 'http://hoth.amu.edu.pl/~piopta/le-piaf/man-christmas-bow-tie.png',
          category: 'ties',
          tags: ['christmas', 'red'],
          prices: {
            PLN: 29.90,
            EUR: 6.90
          }
        },
        {
          name: 'Unisex Red Cap',
          imageUrl: 'http://hoth.amu.edu.pl/~piopta/le-piaf/unisex-red-cap.png',
          category: 'hats',
          tags: ['white', 'red', 'sport'],
          prices: {
            PLN: 39.90,
            EUR: 8.90
          }
        },
        {
          name: 'Gray T-Shirt',
          imageUrl: 'http://hoth.amu.edu.pl/~piopta/le-piaf/man-gray-tshirt.png',
          category: 't-shirts',
          tags: ['gray', 'casual'],
          prices: {
            PLN: 19.90,
            EUR: 4.90
          }
        },
        {
          name: 'Black Purse',
          imageUrl: 'http://hoth.amu.edu.pl/~piopta/le-piaf/woman-black-purse.png',
          category: 'purses',
          tags: ['black', 'elegant'],
          prices: {
            PLN: 79.90,
            EUR: 12.90
          }
        }
      ]
    }

    this.closeModal = this.closeModal.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
    
  closeModal() {
    this.setState({
      selectedProduct: null
    });
  }

  handleClick(selectedProductIndex) {
    this.setState({
      selectedProduct: selectedProductIndex
    });
  }

  render() {
    const products = this.state.products.map((product, index) => 
      <li key={product.id}>
        <Product
          index={index}
          handleClick={this.handleClick}
          name={product.name}
          imageUrl={product.imageUrl}
          price={product.prices['PLN']}
        />
      </li>
    );
    return (
      <div className="ProductList">
        { 
          (this.state.products.length !== 0) ?
          products : <span>Shop is closed!</span>
        }
        <ProductModal 
          modalOpened={this.state.selectedProduct!==null}
          closeModal={this.closeModal}
          products={this.state.products}
          selectedProduct={1}
        />
      </div>
    );
  }
}

export default ProductList;