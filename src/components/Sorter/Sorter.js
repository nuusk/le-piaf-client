import React, { Component } from 'react';
import './Sorter.css';

class Sorter extends Component {

  // handleSortingOptionChange(event) {
  //   this.setState((prevState)=>{
  //     if (event.target.name === 'sorting-category')
  //       return { sortingCategory: event.target.value };
  //     else if (event.target.name === 'sorting-direction')
  //       return { sortingDirection: event.target.value };
  //   }, ()=>{
  //     this.props.handleSortingOptionChange(this.state);
  //   });
  // }

  render() {
    return (
      <div className="Sorter">
        <div className="sorting-title">Sort by</div>

        <select
          name="sorting-category"
          className="sorting-category"
          onChange={this.props.handleSortingOptionChange}
        >
          <option value="name">name</option>
          <option value="price">price</option>
        </select>

        <select 
          name="sorting-direction"
          className="sorting-direction" 
          onChange={this.props.handleSortingOptionChange}
        >
          <option value="ascending">low to high</option>
          <option value="descending">high to low</option>
        </select>

      </div>
    );
  }
}

export default Sorter;