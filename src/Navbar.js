import { Link, useMatch, useResolvedPath } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import "./App.css";
import "./index.css";

export default function Navbar()
{
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])
  return (
    <nav className="nav">
      {screenWidth > 500 && (
        [
            <Link to="/" className="site-title">
                Omar Abuhammoud
            </Link>,
            <ul>
                <CustomLink to="/aboutme">About Me</CustomLink>
                <CustomLink to="/projects">Projects</CustomLink>
                <CustomLink to ="/contactme">Contact Me</CustomLink>
          </ul>
        ]
      )}
      {/* <button onClick={toggleNav} className = "menubutton">BUTTON</button>*/} 
      
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}