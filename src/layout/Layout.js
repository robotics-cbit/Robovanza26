import Navbar from "./navbar/Navbar.js"
import Footer from "./footer/Footer"

export default function Layout({children}){
    return(
        <div className="bg-darkblue text-black">
            <Navbar/>
            {children}
            <Footer/>
        </div>
    )
}