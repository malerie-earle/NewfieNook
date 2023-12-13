import newfieNook from "../images/newfieNook.png";
import nlcircle from "../images/NLcircle.png";
import ProductList from "../components/ProductList.jsx";

const Home = () => {
  return (
    <div className = "home">
      <img src = {nlcircle} alt = "NL Circle" className = "nlCircle" />
      <img src = {newfieNook} alt = "Newfie Nook Title" className = "newfieNookTitle" />
      <hr />
      <ul>
        <li>
          <ProductList />
        </li>
      </ul>
      
    </div>
  )
}

export default Home;
