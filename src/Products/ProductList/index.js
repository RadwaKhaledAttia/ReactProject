import React from 'react';
import './index.css';

const Products = (props) => {
  return(
    <div>
      <ul className="lists">
        {props.list.map(products => (
          <li className="one-product">
          <div className="container">
            {products.name}
            </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Products;
