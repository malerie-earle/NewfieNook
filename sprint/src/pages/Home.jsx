import { useState, useEffect } from 'react';
import productsData from "../data/Products.JSON"; 
import nlcircle from "../images/NLcircle.png";
import newfieNook from "../images/newfieNook.png";
import "../styles/index.css";
import Nav from "../components/Nav.jsx";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(productsData);
        const jsonData = await data.json();

        if (Array.isArray(jsonData)) {
          setProducts(jsonData);
        } else {
          console.error('Fetched data is not an array.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const featuredProduct = products[0];

  return (
    <div className="home">
      <div className="banner">
        <img src={nlcircle} alt="NL Circle" className="nlCircle" />
        <img src={newfieNook} alt="Newfie Nook Title" className="newfieNookTitle" />
      </div>
      <div className="features">
        <h1>- Features -</h1>
        
        <div>

        </div>
      </div>
    </div>
  );
};

export default Home;
