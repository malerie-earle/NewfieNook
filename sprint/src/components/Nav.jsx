import { Outlet, Link } from "react-router-dom";
          {/* I have the Checkout link ready to uncomment once it is active. 
          Was throwing an error for me bc it was an empty link, 
          Love you all <3 especially you ryan*/}
          {/* <Link to="/checkout">
            <div className="navBox">
              <h3>Checkout</h3>
            </div>
          </Link> */}
          // jsx hates comments lol - malerie
const Nav = () => {
  return (
    <>
    <nav>
      <div className="navBar">


        {/* <div class="wrap">
                  <div class="search">
                    <input type="text" class="searchTerm" placeholder="Search..." />
                    <button type="submit" class="searchButton">
                      <i class="fa fa-search">
                          <img src = "Images/search_icon_125165.png" id = "searchIcon" /> 
                      </i>
                    </button>
                  </div>
              </div> */}


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
      </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;