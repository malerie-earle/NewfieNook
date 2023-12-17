import "./styles/App.css";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.js";
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
          </Routes>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
