import React, { Component } from 'react';
import Modal from 'react-modal';
import './ProductModal.css'

class ProductModal extends Component {
  constructor(props) {
    super(props);

    this.closeTimeout = 300;

    this.handleAddToCart = this.handleAddToCart.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  handleAddToCart() {
    this.props.handleAddToCart(this.props.products.indexOf(this.props.selectedProduct));
  }
  

  render() {
    let selectedProduct = this.props.selectedProduct;
    return (
      <Modal
        isOpen={this.props.modalOpened}
        onRequestClose={this.props.closeModal}
        contentLabel="Product Details"
        closeTimeoutMS={this.closeTimeout}
        className="ProductModal"
      >
      {
        selectedProduct?
        <div className="product-details">
          <img className="product-image" alt='' src={selectedProduct.imageUrl} />
          <div className="product-info">
            <h3 className="product-name">{selectedProduct.name}</h3>
            <div className="underscore" />
            {/*mockup*/}

            <h3 className="product-stock"><strong>Left in stock(mock): </strong>{selectedProduct.sizes.L}</h3>

            <h3 className="product-price">{this.props.getPrice(selectedProduct)}</h3>
            
            <button className="product-button" onClick={this.handleAddToCart}>ADD TO CART</button>
          </div>
        </div>
        :null
      }
        
        
      </Modal>
    );
  }
   
}
export default ProductModal;

