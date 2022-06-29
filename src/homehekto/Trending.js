import TrendingProducts from "./TrendingProducts";
function Trending() {
  return (
    <div className="content__trending">
      <div className="content__trending__products">
        <h1>Trending Products</h1>
      </div>
      <div className="content__trending__productitems">
        <div className="content__trending__productitems__item1">
          <TrendingProducts image="./images/image 1171.png" />
          <TrendingProducts image="./images/image 1170.png" />
          <TrendingProducts image="./images/image 31.png" />
          <TrendingProducts image="./images/image 32.png" />
        </div>
        <div className="content__trending__productitems__item2">
          <div className="content__trending__productitems__item2__sale1">
            <div className="content__trending__productitems__item2__sale1__all">
              <img alt="" src="./images/image 1162.png"></img>
            </div>
            <div className="content__trending__productitems__item2__sale1__products">
              <h2>23% off in all products</h2>
              <a href="/#">Shop Now</a>
            </div>
          </div>
          <div className="content__trending__productitems__item2__sale2">
            <div className="content__trending__productitems__item2__sale2__all">
              <img alt="" src="./images/image 1161.png"></img>
            </div>
            <div className="content__trending__productitems__item2__sale2__products">
              <h2>23% off in all products</h2>
              <a href="/#">View Collection</a>
            </div>
          </div>
          <div className="content__trending__productitems__item2__executive">
            <div className="content__trending__productitems__item2__executive__seat">
              <div className="content__trending__productitems__item2__executive__seat__img">
                <img alt="" src="./images/image 30.png"></img>
              </div>
              <div className="content__trending__productitems__item2__executive__seat__chair">
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </div>
            </div>
            <div className="content__trending__productitems__item2__executive__seat">
              <div className="content__trending__productitems__item2__executive__seat__img">
                <img alt="" src="./images/image 19.png"></img>
              </div>
              <div className="content__trending__productitems__item2__executive__seat__chair">
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </div>
            </div>
            <div className="content__trending__productitems__item2__executive__seat">
              <div className="content__trending__productitems__item2__executive__seat__img">
                <img alt="" src="./images/image 28.png"></img>
              </div>
              <div className="content__trending__productitems__item2__executive__seat__chair">
                <p>Executive Seat chair</p>
                <p>$32.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Trending;
