import { Navbar } from "../components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import { Hero } from "../components/Hero/Hero"
import { Footer } from "../components/Footer/Footer"
export const Layout = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Outlet />
            <Footer />
            
        </div>
    )
}
