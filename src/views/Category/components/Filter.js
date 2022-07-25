

import React, { Component } from "react";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex:null
    };
  }
  render() {
    return (
      <div class="sidebar_section">
        <div class="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul class="sidebar_categories">
          <li  onMouseDow={()=>alert("hii")} class= {this.state.activeIndex == 0 ?"active":""}>
          {/* <button onClick={()=>alert("hii")}>Men</button> */}
            <a href="#" onKeyPress={()=>this.setState({activeIndex:0})}>Men</a>
          </li>
          <li >
            <a href="#">
              <span>
                <i class="fa fa-angle-double-right" aria-hidden="true"></i>
              </span>
              Women
            </a>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a href="#">New Arrivals</a>
          </li>
          <li>
            <a href="#">Collection</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
