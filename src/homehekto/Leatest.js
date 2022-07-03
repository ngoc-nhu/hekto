import LeatestProducts from "./LeatestProducts";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import FeaturedProduct from "./FeaturedProdcuts";
class Leatest extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      slideToShow: 1,
      slideToSroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      rows: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: false,
            slidesToShow: 2,
            slideToSroll: 2,
            autoplay: true,
            slidesPerRow: 1,
            autoplaySpeed: 3000,
            rows: 2,
          },
        },
        {
          breakpoint: 494,
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
      "./images/image 1166.png",
      "./images/image 15.png",
      "./images/image 1168.png",
      "./images/image 23.png",
      "./images/image 32.png",
      "./images/image 3 (1).png",
    ];
    return (
      <div className="content__leatest">
        <div className="content__leatest__products">
          <h1>Leatest Products</h1>
        </div>
        <div className="content__leatest__menu">
          <a className="a1" href="/#">
            New Arrival
          </a>
          <a href="/#">Best Seller</a>
          <a href="/#">Featured</a>
          <a href="/#">Special Offer</a>
        </div>
        <div className="content__leatest__slide">
          <div id="Leatest__pc">
            <Slider {...settings}>
              {listImages.map((image) => (
                <LeatestProducts image={image} />
              ))}
            </Slider>
          </div>
          <div id="slider">
            <Slider {...settings}>
              {listImages.map((image) => (
                <LeatestProducts image={image} />
              ))}
            </Slider>
          </div>
          <div id="leatest__tablet">
            <Slider {...settings}>
              {listImages.map((image) => (
                <LeatestProducts image={image} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
export default Leatest;
