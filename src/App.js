import Navbar from "./Navbar"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"
import ContactMe from "./pages/ContactMe"
import Projects from "./pages/Projects"
import {Route, Routes} from "react-router-dom"

function App()
{
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutme" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contactme" element={<ContactMe />} />
                </Routes>
            </div>
            
        </>
    )
}

export default App