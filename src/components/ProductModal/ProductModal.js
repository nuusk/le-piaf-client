import React, { Component } from 'react';
import Modal from 'react-modal';
import './ProductModal.css'

class ProductModal extends Component {
  constructor(props) {
    super(props);

    this.closeTimeout = 300;
  }

  componentWillMount() {
    Modal.setAppElement('body');
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
          </div>
        </div>
        :null
      }
        
        
      </Modal>
    );
  }
   
}
export default ProductModal;

