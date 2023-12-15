import nlcircle from "../images/NLcircle.png";
import newfieNook from "../images/newfienook2.png";
import "../styles/index.css";
import Nav from "../components/Nav.jsx";
import { useShoppingCart } from '../context/ShoppingCartContext'; 
import useFetch from "../hooks/useFetch.jsx";

const Home = () => {
  const { data: products, loading, error } = useFetch('localhost:8080');
  

  return (
    <div className="home">
      <div className="banner">
        <img src={nlcircle} alt="NL Circle" className="nlCircle" />
        <img src={newfieNook} alt="Newfie Nook Title" className="newfieNookTitle" />
      </div>
      <div className = "categories">
        <div className = "category2" id = "title">
          Categories:
        </div>
        <div className = "category" id = "cat1">
          <h1 className = "catTitle">Bath & Body</h1>
        </div>
        <div className = "category" id = "cat2">
        <h1 className = "catTitle">Clothing</h1>
        </div>
        <div className = "category" id = "cat3">
        <h1 className = "catTitle">Food & Drink</h1>
        </div>
        <div className = "category" id = "cat4">
        <h1 className = "catTitle">Merchandise</h1>
        </div>
        <div className = "category" id = "cat5">
        <h1 className = "catTitle">Seasonal</h1>
        </div>
      </div>

      <div className = "section">
      <h1 className = "featureTitle">- Features -</h1><br />
      <div className="features">
        <div className = "feature" id = "feat1"></div>
        <div className = "feature" id = "feat2"></div>
        <div className = "feature" id = "feat3"></div>
        <div className = "feature" id = "feat4"></div>
        </div>
        </div>
        </div>

  );
};

export default Home;
