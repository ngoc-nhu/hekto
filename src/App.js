import "./App.scss";
import Content from "./homehekto/Content";
import Footer from "./homehekto/Footer";
import Header from "./homehekto/Header";
import Navbar from "./homehekto/Navbar";
import Slide from "./homehekto/Slide";
import "./scss/Featured.scss";
import "./scss/Header.scss";
import "./scss/Navbar.scss";
import "./scss/Slide.scss";
import "./scss/Content.scss";
import "./scss/Leatest.scss";
import "./scss/Shopex.scss";
import "./scss/Unique.scss";
import "./scss/Trending.scss";
import "./scss/Discount.scss";
import "./scss/Top.scss";
import "./scss/Newslater.scss";
import "./scss/Logo.scss";
import "./scss/Leatestblg.scss";
import "./scss/Footer.scss";
function App() {
  return (
    <div className="Home_hekto">
      <Header />
      <Navbar />
      <Slide />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
