import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src="https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-200x200.jpg"
              className="img-fluid" alt="iphone12" />
            <a href="!#">
              <div className="mask waves-light waves-effect waves-light"></div>
            </a>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <a href="!#">Iphone 12</a>
              </strong>
            </h4>
            <ul className="rating">
              <li><i className="fa fa-star"></i></li>
              <li><i className="fa fa-star-o"></i></li>
            </ul>
            <p className="card-text">Iphone product</p>
            <div className="card-footer">
              <span className="left">1500$</span>
              <span className="right">
                <a href="!#" className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default ProductItem;