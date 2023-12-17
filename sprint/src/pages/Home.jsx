import nlcircle from "../images/NLcircle.png";
import newfieNook from "../images/newfienook2.png";
import "../styles/index.css";
import Nav from "../components/Nav.jsx";
import { useEffect } from 'react'; // Import useEffect from 'react'
import useFetch from "../hooks/useFetch.jsx";
import ProductList from "../components/ProductList.jsx";

const Home = () => {
  const categories = [
    'Bath-and-Body',
    'Clothing',
    'Food-and-Drink',
    'Merchandise',
    'Seasonal'
  ];

  useEffect(() => {
    categories.forEach((category, index) => {
      fetch(`http://localhost:8080?category=${category}`)
        .then(response => response.json())
        .then(data => {
          console.log(`Category ${index + 1} Data:`, data);
          // Do something with the fetched data for each category
        })
        .catch(error => {
          console.error(`Error fetching category ${index + 1} data:`, error);
        });
    });
  }, [categories]);

  return (
    <div className="home">
      <div className="banner">
        <img src={nlcircle} alt="NL Circle" className="nlCircle" />
        <img src={newfieNook} alt="Newfie Nook Title" className="newfieNookTitle" />
      </div>
      <div className="categories">
        <div className="category2" id="title">
          Categories:
        </div>
        {categories.map((category, index) => (
          <div className="category" key={index} id={`cat${index + 1}`}>
            <a href={`#cat${index + 1}`} className="category-link">
              <h1 className="catTitle">{category}</h1>
            </a>
          </div>
        ))}
      </div>
      <div className="productList">
        <ProductList />
      </div>
    </div>
  );
};

export default Home;

   
      {/* <div className = "section">
      <h1 className = "featureTitle">- Features -</h1><br />
      <div className="features">
        <div className = "feature" id = "feat1"></div>
        <div className = "feature" id = "feat2"></div>
        <div className = "feature" id = "feat3"></div>
        <div className = "feature" id = "feat4"></div>
        </div>
        </div> */}

