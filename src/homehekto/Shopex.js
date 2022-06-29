import ShopexOffer from "./ShopexOffer";

function Shopex() {
  return (
    <div className="content__shopex">
      <div className="content__shopex__offer">
        <h1>What Shopex Offer!</h1>
      </div>
      <div className="content__shopex__support">
        <ShopexOffer image="./images/free-delivery 1.png" />
        <ShopexOffer image="./images/cashback 1.png" />
        <ShopexOffer image="./images/premium-quality 1.png" />
        <ShopexOffer image="./images/24-hours-support 1.png" />
      </div>
    </div>
  );
}
export default Shopex;
