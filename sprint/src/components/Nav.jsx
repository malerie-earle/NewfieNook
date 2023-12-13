import { Outlet, Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
    <div className="navBar">
    <nav>
      <Link to = "/">
      <div className = "navBox" id = "nav1">
          <h3>Home</h3></div></Link>

      <div className = "navBox">
        <h3>Cart</h3>
      </div>

      <div className = "navBox">
        <h3>Checkout</h3>
      </div>

  </nav>
  </div>
  <Outlet />
  </>
  )
}

export default Nav
