import { Outlet } from "react-router-dom"
import Navbar from "../../Componants/Navbar"
import LearnAside from "./LearnAside"


const LearnLayout = () => {
  return (
    <>
      <div className="flex">
        <LearnAside />
        <div className="flex flex-col">
          <Navbar />
          <div className="p-12 w-3/4"><Outlet /></div> 
        </div>
      </div>
    </>
  )
}

export default LearnLayout