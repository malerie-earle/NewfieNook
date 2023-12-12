import newfieNook from "../images/newfieNook.png";
import nlcircle from "../images/NLcircle.png";
const Home = () => {
  return (
    <div className = "home">
      <img src = {nlcircle} alt = "NL Circle" className = "nlCircle" />
      <img src = {newfieNook} alt = "Newfie Nook Title" className = "newfieNookTitle" />
      <hr />
      
    </div>
  )
}

export default Home;
