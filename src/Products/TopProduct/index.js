import React, { Component } from 'react';
import Products from '../ProductList';

class TopProduct extends Component {

  state = {
    products: []
  }

  componentDidMount(){
    fetch('https://boodycaar.herokuapp.com/api/v1/products')
      .then(response => response.json())
      .then(json => this.setState({ products: json.data }))
  }
  render() {
    return(
      <Products list={this.state.products}/>
    )
  }

}

export default TopProduct;
