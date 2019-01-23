import React, { Component } from 'react';
import logo from './logo.png';
import TopProduct from './Products/TopProduct';
import TopCompany from './Companies/TopCompany';
import './App.css';
import 'whatwg-fetch';

class App extends Component {


  render() {
    return (
      <div className="App">
        <header className="App-header">

        <div className="header">
          <img src={logo}  alt="logo" />
          </div>

          <div className="topnav">
            <a className="active" href="#">HOME</a>
            <a href="#">COMPANIES</a>
            <a href="#">ABOUT US</a>
            <a href="#">CONTACT US</a>
            <div className="reglinks">
              <a className="reg" href="#">REGISTER</a>
              <a href="#">SIGN IN</a>
              </div>
              <div className="search">
                <a className="active" href="#">ADVANCED SEARCH</a>
                <a href="#">NORMAL SEARCH</a>
                </div>
            </div>
            <div className="paragraphs">
              Your Spare Part Online Store
              <br></br>
              <span>Book your spare part now</span>
            </div>

        </header>
        <p className="top"> <b> TOP SELLER  </b></p>
        <TopProduct />
        <p> <a className="more" href="#"> SEE MORE SPARE PARTS > </a> </p>
        <br></br>
        <p className="top"> <b> TOP COMPANIES  </b></p>
        <TopCompany />
        <p> <a className="more" href="#"> SEE MORE COMPANIES > </a> </p>
      </div>
    );
  }
}

export default App;
