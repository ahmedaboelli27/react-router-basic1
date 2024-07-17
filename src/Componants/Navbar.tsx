import { NavLink } from "react-router-dom"
import "../index.css";


const Navbar = () => {
  return (
    <nav>
        <ul>
            <li ><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Contact">Contact</NavLink></li>
            <li><NavLink to="/About">About Us</NavLink></li>
            <li><NavLink to="/Learn">Learn</NavLink></li>

        </ul>
    </nav>
  )
}

export default Navbar