import "./styles/App.css";
import ProductList from "./components/ProductList.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <>

        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
        
          </Routes>
        </BrowserRouter>

    </>
  );
}

export default App;