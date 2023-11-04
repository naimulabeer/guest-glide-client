import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"


function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Root
