import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';

var itemList = [];

class Product extends Component {


  constructor(props) {
    super(props);
    // console.log(props);
    this.state = { 
      produtc: props.location.state.product, 
      list: [], 
      shopcar: props.shopcar 
    };
    // console.log(this.state);
  }

  find = (array) => {
    // console.log(array.id);
    return array.id === this.state.produtc.id;
  }

  addShopcar = () => {
    if (getJsonItem("itemList")) {  //location有沒有資料
      itemList = getJsonItem("itemList");
      // console.log(itemList);
      // console.log(itemList.find(this.find))

      if (itemList.find(this.find) !== undefined) {  //先判別itemList有沒有這項商品
        itemList.forEach((element) => {
          if (element.id === this.state.produtc.id) {  //尋找商品id
            let tmp = parseInt(element.num);  //商品記數+1
            tmp +=1;
            element.num=tmp;
            // console.log(element.num);
          }
        });
      } else {
        itemList.push(this.state.produtc);
      }

    } else {
      itemList.push(this.state.produtc);
      
    }

    //set值到location
    this.setState({ list: itemList }, () => {
      // console.log(this.state);
      // console.log(this.state.shopcar);
    });
    // console.log(itemList);
    this.props.onAdd(itemList);
    setJsonItem("itemList", itemList);


    // if (this.state.shopcar.find(this.find) !== undefined) {
    //   console.log('+1');
    // }



  }

  render() {
    const p = this.props.location.state.product;
    if (!p) return <Redirect to="/" />
    // console.log(p);

    return (
      <div className="App">
        <div className="container">

          <div className="row">

            <div className="col-md-8">

              <h1 className="my-4">Page Heading
                <small>Secondary Text</small>
              </h1>

              <div className="card mb-4">
                <img className="card-img-top img-fluid" src={p.picture} alt="" />
                <div className="card-body">
                  <h3 className="card-title">{p.name}</h3>
                  <h4>${p.price}</h4>
                  <p className="card-text">商品介紹：<br />{p.Introduction}</p>
                  <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                  4.0 stars
                </div>
              </div>



              <ul className="pagination justify-content-center mb-4">
                <li className="page-item">
                  <Link className="page-link" to="#">&larr; Older</Link>
                </li>
                <li className="page-item disabled">
                  <Link className="page-link" to="#">Newer &rarr;</Link>
                </li>
              </ul>

            </div>

            <div className="col-md-4">

              <div className="card my-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search for..." />
                    <span className="input-group-btn">
                      <button className="btn btn-secondary" type="button">Go!</button>
                    </span>
                  </div>
                </div>
              </div>

              <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                  <div className="row">
                    <button className="col-lg-12" onClick={this.addShopcar}> 加入購物車  </button>
                    {/*<div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <Link to="#">Web Design</Link>
                        </li>
                        <li>
                          <Link to="#">HTML</Link>
                        </li>
                        <li>
                          <Link to="#">Freebies</Link>
                        </li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <Link to="#">JavaScript</Link>
                        </li>
                        <li>
                          <Link to="#">CSS</Link>
                        </li>
                        <li>
                          <Link to="#">Tutorials</Link>
                        </li>
                      </ul>
                    </div>*/}
                  </div>
                </div>
              </div>

              <div className="card my-4">
                <h5 className="card-header">Side Widget</h5>
                <div className="card-body">
                  You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default Product;


//JSON加密
function setJsonItem(key, param) {
  window.localStorage.setItem(key, JSON.stringify(param));
};

//JSON解密
function getJsonItem(key) {
  var data = window.localStorage.getItem(key)
  return JSON.parse(data);
};