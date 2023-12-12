import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Router>
        <ShoppingCartProvider>
          <Switch>
            <Route path="/" exact Component={ProductList} />
          </Switch>
        </ShoppingCartProvider>
      </Router>
    </>
  );
}

export default App;
