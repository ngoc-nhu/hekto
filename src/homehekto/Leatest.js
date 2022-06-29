import LeatestProducts from "./LeatestProducts";

function Leatest() {
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
        <LeatestProducts image="./images/image 1166.png" />
        <div className="content__leatest__slide__chairtwo">
          <div className="content__leatest__slide__chairtwo__img">
            <div className="content__leatest__slide__chairtwo__img__img2">
              <img alt="" src="./images/image 15.png"></img>
            </div>
            <div className="content__leatest__slide__chairtwo__img__sale">
              <img alt="" src="./images/Group 27.png"></img>
            </div>
            <div className="content__leatest__slide__chairtwo__img__shop">
              <div className="content__leatest__slide__chairtwo__img__shop__like">
                <img className="img1" alt="" src="./images/Group 28.png"></img>
                <img alt="" src="./images/Vector (5).png"></img>
                <img alt="" src="./images/Vector (6).png"></img>
              </div>
            </div>
          </div>
          <div className="content__leatest__slide__chairtwo__price">
            <div className="name">
              <p>Comfort Handy Craft</p>
            </div>
            <div className="pricesale">
              <p>$42.00</p>
              <p className="sale">$65.00</p>
            </div>
          </div>
        </div>
        <LeatestProducts image="./images/image 1168.png" />
        <LeatestProducts image="./images/image 23.png" />
        <LeatestProducts image="./images/image 32.png" />
        <LeatestProducts image="./images/image 3 (1).png" />
      </div>
    </div>
  );
}
export default Leatest;
