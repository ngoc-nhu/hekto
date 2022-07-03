import ShopexOffer from "./ShopexOffer";
import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
class Shopex extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: false,
      slidesToScroll: 2,
      slidesToShow: 2,
      rows: 2,
      slidesPerRow: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    const listImages = [
      "./images/free-delivery 1.png",
      "./images/cashback 1.png",
      "./images/premium-quality 1.png",
      "./images/24-hours-support 1.png",
      "./images/free-delivery 1.png",
      "./images/cashback 1.png",
      "./images/premium-quality 1.png",
      "./images/24-hours-support 1.png",
    ];
    return (
      <div className="content__shopex">
        <div className="content__shopex__offer">
          <h1>What Shopex Offer!</h1>
        </div>
        <div className="content__shopex__support">
          <div id="shopex__mobile">
            <Slider {...settings}>
              {listImages.map((image) => (
                <ShopexOffer image={image} />
              ))}
            </Slider>
          </div>
          <div id="shopex__pc">
            <ShopexOffer image="./images/free-delivery 1.png" />
            <ShopexOffer image="./images/cashback 1.png" />
            <ShopexOffer image="./images/premium-quality 1.png" />
            <ShopexOffer image="./images/24-hours-support 1.png" />
          </div>
        </div>
      </div>
    );
  }
}
export default Shopex;
