import React, { Component } from 'react';
import Companies from '../CompanyList';

class TopCompany extends Component {

  state = {
    companies: []
  }

  componentDidMount(){
    fetch('https://boodycaar.herokuapp.com/api/v1/companies')
      .then(response => response.json())
      .then(json => this.setState({ companies: json.data }))
  }
  render() {
    return(
      <Companies list={this.state.companies}/>
    )
  }

}

export default TopCompany;
