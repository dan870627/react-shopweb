import React, { Component } from 'react';

import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/react-shopweb/">Start Bootstrap</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/react-shopweb/">Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/react-shopweb/about/">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/react-shopweb/shopcar/">Shopcar</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
