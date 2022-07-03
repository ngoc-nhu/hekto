import TopCategories from "./TopCategories";

import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
class Top extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slideToSroll: 2,
            autoplay: true,
            slidesPerRow: 1,
            autoplaySpeed: 3000,
            rows: 1,
          },
        },
        {
          breakpoint: 495,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slideToSroll: 1,
            autoplay: true,
            slidesPerRow: 1,
            autoplaySpeed: 3000,
            rows: 1,
          },
        },
      ],
    };
    const listImages = [
      "./images/image 20.png",
      "./images/image 1168.png",
      "./images/image 1171.png",
      "./images/image 20.png",
    ];
    return (
      <div className="content__top">
        <div className="content__top__categories">
          <h1>Top Categories</h1>
        </div>
        <div className="content__top__mini">
          <div id="mobile">
            <Slider {...settings}>
              {listImages.map((image) => (
                <TopCategories image={image} />
              ))}
            </Slider>
          </div>
          <div id="pc">
            {listImages.map((image) => (
              <TopCategories image={image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Top;
