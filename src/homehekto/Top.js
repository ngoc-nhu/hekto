import TopCategories from "./TopCategories";
function Top() {
  return (
    <div className="content__top">
      <div className="content__top__categories">
        <h1>Top Categories</h1>
      </div>
      <div className="content__top__mini">
        <TopCategories image="./images/image 20.png" />
        <TopCategories image="./images/image 1168.png" />
        <TopCategories image="./images/image 1171.png" />
        <TopCategories image="./images/image 20.png" />
      </div>
    </div>
  );
}
export default Top;
