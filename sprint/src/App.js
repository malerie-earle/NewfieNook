import "./styles/App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;