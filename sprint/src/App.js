import "./styles/App.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import Checkout from "./components/Checkout.jsx";
function App() {
  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path = "/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
