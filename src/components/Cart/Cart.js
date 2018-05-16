import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
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

  addItem(e, newItem) {
    this.setState(prevState => ({
      items: [...prevState.items, newItem],
      totalCount: prevState.totalCount + 1
    }));
  }

  removeItem(e, itemId) {
    let removedItemIndex;;
    this.state.items.some((item, index)=>{
      if (item.id === itemId) {
        removedItemIndex = index;
        return true;
      }
      return false; //?????
    });
    if (typeof itemId !== 'undefined') {
      this.setState(prevState => {
        let newItemList = prevState.items.slice();
        newItemList.splice(removedItemIndex, 1);
        return {items: newItemList};
      });
    }
  }

  render() {
    const items = this.state.items.map(item => 
      <li key={item.id}>
        <div className="item-name">{item.name}</div>
        <div className="item-price">{item.price}</div>
      </li>
    );
    return (
      <div className="Cart">
        {items}
      </div>
    );
  }
}

export default Cart;