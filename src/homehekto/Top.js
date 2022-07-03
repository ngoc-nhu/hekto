import TopCategories from "./TopCategories";

import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
class Top extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      slideToShow: 1,
      slideToSroll: 1,
      rows: 1,
    };
    return (
      <div className="content__top">
        <div className="content__top__categories">
          <h1>Top Categories</h1>
        </div>
        <div className="content__top__mini" id="mobile">
          <Slider {...settings}>
            <TopCategories image="./images/image 20.png" />
            <TopCategories image="./images/image 1168.png" />
            <TopCategories image="./images/image 1171.png" />
            <TopCategories image="./images/image 20.png" />
          </Slider>
        </div>
        <div className="content__top__mini" id="pc">
          <TopCategories image="./images/image 20.png" />
          <TopCategories image="./images/image 1168.png" />
          <TopCategories image="./images/image 1171.png" />
          <TopCategories image="./images/image 20.png" />
        </div>
      </div>
    );
  }
}
export default Top;
