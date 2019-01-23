import React from 'react';
import './index.css';

const Companies = (props) => {
  return(
    <div>
      <ul className="lists">
        {props.list.map(companies => (
          <li className="one-product">
          <div className="container">
            {companies.companyname}
            </div>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Companies;
