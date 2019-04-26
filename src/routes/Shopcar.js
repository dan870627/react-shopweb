import React, { Component } from 'react';

var itemList = [];

class Shopcar extends Component {

  componentDidMount = () => {
    this.props.onChange();
  }

  ChangeNum(id) {
    //  let i=0;  可以用array find
    //   itemList.forEach(() => {
    //     if(itemList[i].id === id){
    //       console.log(i);
    //       console.log(itemList[i]);
    //       id = 0;
    //     }
    //     i+=1;
    //   })

    let index = itemList.findIndex((p) => p.id === id);
    var Str = document.getElementById(id);
    if (Str.value <= 0) {
      alert("請輸入大於0的數量");
      document.getElementById(id).value = itemList[index].num;
      Str.focus();
    } else {
      itemList[index].num = Str.value;
      setJsonItem("itemList", itemList);
      this.props.onChange();
    }
  }

  dltbtn(id) {
    if (window.confirm("Delete the item?")) {
      // var del = this.refs[id];
      // console.log(del)
      itemList.splice(id, 1);
      setJsonItem("itemList", itemList);
      console.log(this.refs[id].parentElement.parentElement.children[2].children[0].value) ;
      // console.log(itemList);
      this.props.onChange();

      // var del = document.getElementById(id);
      // console.log(del.parentElement.parentElement);
    }
  }

  shopcardata(p, index) {
    // console.log(itemList);
    return (
      <tr key={index}>
        <td width='20%'><img style={{ width: '50%' }} src={p.picture} alt="" /></td>
        <td>{p.name}</td>
        <td><input id={p.id} value={p.num} onBlur={() => { this.ChangeNum(p.id) }} onChange={() => {}} /></td>
        <td>${p.price}</td>
        <td><button ref={index} onClick={() => { this.dltbtn(index) }}>刪除</button></td>
      </tr>
    )
  }

  render() {
    if (getJsonItem("itemList")) {  //先把location的資料匯入itemList
      itemList = getJsonItem("itemList");
    }

    return (
      <div className="App">

        <div id="wrapper">

          <div id="content-wrapper">

            <div className="container-fluid">
              <div className="card mb-3">
                <div className="card-header">
                  <i className="fas fa-table"></i>
                  購物車明細
                  </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                      <thead>
                        <tr>
                          <th>產品</th>
                          <th>產品名稱</th>
                          <th>數量</th>
                          <th>價錢</th>
                          <th>操作</th>
                        </tr>
                      </thead>
                      {/*<tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </tfoot>*/}
                      <tbody >
                        {/*console.log(this.props.shopcar)*/}
                        {itemList.map((p, index) => this.shopcardata(p, index))}

                      </tbody>
                    </table>
                  </div>
                  <span id="total">總共：${this.props.total}</span>
                  <button>結帳</button>
                </div>
                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
              </div>

            </div>



          </div>


        </div>

      </div>

    );
  }
}

export default Shopcar;


//JSON加密
function setJsonItem(key, param) {
  window.localStorage.setItem(key, JSON.stringify(param));
};

//JSON解密
function getJsonItem(key) {
  var data = window.localStorage.getItem(key)
  return JSON.parse(data);
};