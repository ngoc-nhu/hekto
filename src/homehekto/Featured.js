import FeaturedProduct from "./FeaturedProdcuts";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";

class Featured extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      slidesToScroll: 2,
      slidesToShow: 2,
      rows: 2,
      slidesPerRow: 1,
      centerPadding: "60px",
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <div className="content__featured">
        <div className="content__featured__products">
          <p>Featured Products</p>
          <div className="content__featured__slide">
            <div id="featured__mobile">
              <Slider {...settings}>
                <FeaturedProduct image="./images/image 1168.png" />
                <FeaturedProduct image="./images/image 3.png" />
                <FeaturedProduct image="./images/image 1169.png" />
                <FeaturedProduct image="./images/image 1.png" />
                <FeaturedProduct image="./images/image 1168.png" />
                <FeaturedProduct image="./images/image 3.png" />
                <FeaturedProduct image="./images/image 1169.png" />
                <FeaturedProduct image="./images/image 1.png" />
              </Slider>
            </div>
            <div id="featured__pc">
              <FeaturedProduct image="./images/image 1168.png" />
              <FeaturedProduct image="./images/image 1.png" />
              <FeaturedProduct image="./images/image 1169.png" />
              <FeaturedProduct image="./images/image 3.png" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Featured;
