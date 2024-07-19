import { NavLink } from "react-router-dom"
import "../index.css";


const Navbar = () => {
  return (
    <nav>
        <ul className="list-none flex items-center justify-center my-3 space-x-8 w-3/4">
            <li ><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/About">About Us</NavLink></li>
            <li><NavLink to="/ContributePage">ContributePage</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
            <li><NavLink to="/Learn">Learn</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar