import LeatestBlog from "./LeatestBlog";

import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
class Leatestblg extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      slideToShow: 1,
      slideToSroll: 1,
      rows: 1,
      autoplaySpeed: 3000,
    };
    return (
      <div className="content__leatestblg">
        <div className="content__leatestblg__blog">
          <h1>Leatest Blog</h1>
        </div>
        <div className="content__leatestblg__top">
          <div id="leatestblg__mobile">
            <Slider {...settings}>
              <LeatestBlog image="./images/JIUjvqe2ZHg.png" />
              <LeatestBlog image="./images/2dc.png" />
              <LeatestBlog image="./images/3dc.png" />
            </Slider>
          </div>
          <div id="leatestbtg__pc">
            <LeatestBlog image="./images/JIUjvqe2ZHg.png" />
            <LeatestBlog image="./images/2dc.png" />
            <LeatestBlog image="./images/3dc.png" />
          </div>
        </div>
      </div>
    );
  }
}
export default Leatestblg;
