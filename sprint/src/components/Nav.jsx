import { Outlet, Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
    <div className="navBar">
    <nav>
      <Link to = "/home">
      <div className = "navBox" id = "nav1">
          <h3>Home</h3></div></Link>

  </nav>
  </div>
  <Outlet />
  </>
  )
}

export default Nav
