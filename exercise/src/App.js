import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          name: 'iphone12',
          price: 44000,
          img: 'img/iphone12.jpg',
          status: true
        },
        {
          id: 2,
          name: 'iphone6',
          price: 10000,
          status: true,
        },
        {
          id: 3,
          name: 'iphone10',
          price: 22000,
          status: true
        },
        {
          id: 4,
          name: 'iphone9',
          price: 22000,
          status: false
        }
      ],
      active: true
    }
  }

  addProduct = (e) => {
    e.preventDefault()
    console.log(this.refs.name.value);
  }

  activeData = () => {
    this.setState({
      active: !this.state.active
    })
  }

  sortAsc = () => {
    let sortAsc;
    sortAsc = this.state.products.sort((a, b) => {
      return parseInt(a.price) - parseInt(b.price);
    })
    this.setState({
      products: sortAsc
    })
  }

  sortDesc = () => {
    let sortDesc;
    sortDesc = this.state.products.sort((a, b) => {
      return parseInt(b.price) - parseInt(a.price);
    })
    this.setState({
      products: sortDesc
    })
  }

  render() {

    const items = this.state.products.map((item, index) => {
      if (item.status) {
        return <Product name={item.name} key={index} price={item.price} img={item.img} />
      }
    });

    const datas = this.state.products.map((data, index) => {
      if (this.state.active) {
        return (
          <tr key={index}>
            <td scope="row">{index}</td>
            <td>{data.name}</td>
            <td><img src={data.img ? data.img : "/img/not-available.jpg"} alt="" width="50" /></td>
            <td><span className="badge badge-warning">{data.price}</span></td>
          </tr>
        )
      }
    })

    return (
      <div className="main">
        <Header />
        <div className="container-fluid">
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title">Data Product</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Img</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {datas}
                </tbody>
              </table>
              <div className="col-12 text-center">
                <button type="button" className="btn btn-success mt-5" onClick={this.activeData}>Active: {this.state.active ? "true" : "false"}</button>
                <button type="button" className="btn btn-info ml-5 mt-5" onClick={this.sortAsc}>Sort Price Asc</button>
                <button type="button" className="btn btn-info ml-5 mt-5" onClick={this.sortDesc}>Sort Price Desc</button>
              </div>
            </div>
          </div>
          <div className="card mt-5">
            <div className="card-body">
              <h5 className="card-title">Add More Product</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="nameProduct">Name Product</label>
                  <input ref="name" type="text" className="form-control" id="nameProduct" aria-describedby="emailHelp" placeholder="Enter name" />
                  <small id="emailHelp" className="form-text text-muted">Enter your name product.</small>
                </div>
                {/* <div className="form-group">
                  <label for="priceProduct">Price Product</label>
                  <input type="text" className="form-control" id="priceProduct" placeholder="Enter price" />
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="status" />
                  <label className="form-check-label" for="status">Publish</label>
                </div> */}
                <button type="submit" className="btn btn-primary" onClick={this.addProduct}>Submit</button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card-columns pt-5">
                {items}
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


export default App;
