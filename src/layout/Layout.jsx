import { Navbar } from "../components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Hero } from "../components/Hero/Hero"
export const Layout = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Outlet />
           
        </div>
    )
}
