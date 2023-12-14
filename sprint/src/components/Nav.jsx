import { Outlet, Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="navBar">
        <nav>
          <Link to="/">
            <div className="navBox" id="nav1">
              <h3>Home</h3>
            </div>
          </Link>
          <br />
          <Link to="/cart">
            <div className="navBox">
              <h3>Cart</h3>
            </div>
          </Link>
          <br />
          {/* I have the Checkout link ready to uncomment once it is active. 
          Was throwing an error for me bc it was an empty link, 
          Love you all <3 especially you ryan*/}
          {/* <Link to="/checkout">
            <div className="navBox">
              <h3>Checkout</h3>
            </div>
          </Link> */}
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default Nav;