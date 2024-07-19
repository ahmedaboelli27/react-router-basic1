import { NavLink } from "react-router-dom"

const LearnAside = () => {
  return (
    <aside>      
        <ul className="space-y-4">
            <li className="w-full">
                <NavLink to="/Learn" end>
                    Quick Start
                </NavLink>
            </li>
            <li className="w-full"> 
                <NavLink to="/Learn/Thinking-In-React">
                    Thinking In React
                </NavLink>
            </li>
            <li className="w-full">
                <NavLink to="/Learn/Installation">
                    Installation
                </NavLink>
            </li>
        </ul>   
    
    </aside>
  )
}

export default LearnAside