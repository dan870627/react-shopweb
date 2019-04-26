import React, { Component } from 'react';

import { Link } from "react-router-dom";

var propsList = [];
class Home extends Component {
  renderprops(p, index) {
    return (
      <div className="col-lg-4 col-md-6 mb-4" key={index}>
        <div className="card h-100">
          <Link to={{
            pathname: `/react-shopweb/product/${p.id}`,
            state: { product: p }
          }}><img className="card-img-top" src={p.picture} alt="" /></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to={{
                pathname: `/react-shopweb/product/${p.id}`,
                state: { product: p }
              }}>{p.name}</Link>
            </h4>
            <h5>${p.price}</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>
    );
  }

  // propsPicture(p, index) {
  //   console.log(p);
  //   if (index === 0) {
  //     return (
  //       <div className="carousel-item active" key={index}>
  //         <img className="d-block img-fluid" src={p.picture} alt="First slide" />
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="carousel-item" key={index}>
  //         <img className="d-block img-fluid" src={p.picture} alt="Second slide" />
  //       </div>
  //     );
  //   }
  // }

  render() {
    propsList = this.props.product;
    if (propsList.length === 0) {
      // console.log('a')
      return (
        <div className="App"></div>
      );
    } else {
      return (
        <div className="App">

          <div className="container">

            <div className="row">

              <div className="col-lg-12">

                <div id="carouselExampleIndicators" className="carousel slide my-4 " data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                  </ol>
                  <div className="carousel-inner" role="listbox">
                    {/*propsList.map((p,index) => this.propsPicture(p,index))*/}
                    <div className="carousel-item active">
                      <img className="d-block img-fluid" src={propsList[0].picture} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src={propsList[1].picture} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src={propsList[2].picture} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src={propsList[3].picture} alt="Fourth slide" />
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" src={propsList[4].picture} alt="Fiveth slide" />
                    </div>
                  </div>
                  <Link className="carousel-control-prev" to="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </Link>
                  <Link className="carousel-control-next" to="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </Link>
                </div>

                <div className="row">
                  {/*console.log(propsList)*/}
                  {this.props.product.map((p, index) => this.renderprops(p, index))}

                </div>


              </div>


            </div>


          </div>
        </div>
      );
    }

  }
}

export default Home;
