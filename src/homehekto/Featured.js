import FeaturedProduct from "./FeaturedProdcuts";
function Featured() {
  return (
    <div className="content__featured">
      <div className="content__featured__products">
        <p>Featured Products</p>
      </div>
      <div className="content__featured__slide">
        <FeaturedProduct image="./images/image 1168.png" />
        <FeaturedProduct image="./images/image 1.png" />
        <FeaturedProduct image="./images/image 1169.png" />
        <FeaturedProduct image="./images/image 3.png" />
      </div>
      <div className="divide">
        <img alt="" src="./images/Rectangle 104.png"></img>
        <img alt="" src="./images/Rectangle 104.png"></img>
        <img alt="" src="./images/Rectangle 104.png"></img>
        <img alt="" src="./images/Rectangle 104.png"></img>
      </div>
    </div>
  );
}
export default Featured;
