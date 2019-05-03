import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header';

import Home from './routes/Home';
import About from './routes/About';
import Product from './routes/Product';
import Shopcar from './routes/Shopcar';

import ProductService from './services/Product';

var itemList = [];

//react流程：render() -> 載入並執行方法
//react只要state有更動，網頁就會reflashing一次

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: [],
      shopcar: [],
      total: 0,
    }
    this.getServer();
    if (getJsonItem("itemList")) {  //先把location的資料匯入itemList
      itemList = getJsonItem("itemList");
      // console.log(itemList);
    }
  }

  componentDidMount = () => {
    this.checkSum();
  }

  async getServer() {
    const product = await ProductService.get();
    // console.log(product);
    this.setState({ product });  //有setState會重新跑一次(狀態改變)
  }

  checkSum = () => {
    if (getJsonItem("itemList")) {  //先把location的資料匯入itemList
      itemList = getJsonItem("itemList");
    }
    // let total = 0;
    // itemList.forEach((a) => {
    //   total += a.price * a.num
    // })
    // 專業一點用迭代 reduce 做法
    const total = itemList.reduce((acc, { price, num }) => acc + price * num, 0);
    this.setState({ total }, () => {/*console.log(this.state)*/ });
    //  console.log(this.state.total)
  }


  renderRoute(props, Component) {
    // console.log(props);
    return (
      <Component
        {...props}
        // 既然全都要把 state 傳進去，那可以直接把 this.state 展開傳入
        {...this.state}
        // product={this.state.product}
        // shopcar={this.state.shopcar}
        onAdd={this.setShopcar}
        // total={this.state.total}
        onChange={this.checkSum}
      />
    )
  }

  setShopcar = (shopcar) => {
    // console.log(shopcar);
    this.setState({ shopcar }, () => { /*console.log(this.state);*/ });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="cbody">
            {/** path 根路徑最好就直接使用 path="/" */}
            <Route path="/react-shopweb/" exact render={(props) => this.renderRoute(props, Home)} />
            <Route path="/react-shopweb/about" component={About} />
            <Route path="/react-shopweb/product" render={(props) => this.renderRoute(props, Product)} />
            <Route path="/react-shopweb/shopcar" render={(props) => this.renderRoute(props, Shopcar)} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;


//JSON加密
// function setJsonItem(key, param) {
//   window.localStorage.setItem(key, JSON.stringify(param));
// };

//JSON解密
function getJsonItem(key) {
  var data = window.localStorage.getItem(key)
  return JSON.parse(data);
};