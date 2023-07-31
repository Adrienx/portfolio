import { useState } from "react"
import "../reset.css"
import "../styles/Header.css"
import "bootstrap"

function Header() {
  // Define a state variable 'activeLink' and initialize it to 'home'
  const [activeLink, setActiveLink] = useState("home")

  // Helper function to update the active link
  const handleClick = (link) => {
    setActiveLink(link)
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-xl">
          {/* Hamburger Menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navlinksCont"
            aria-controls="navlinksCont"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navlinksCont">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "home" ? "active" : ""
                  }`}
                  aria-current="page"
                  href="#home"
                  onClick={() => handleClick("home")}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "portfolio" ? "active" : ""
                  }`}
                  href="#portfolio"
                  onClick={() => handleClick("portfolio")}
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "skills" ? "active" : ""
                  }`}
                  href="#skills"
                  onClick={() => handleClick("skills")}
                >
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeLink === "contact" ? "active" : ""
                  }`}
                  href="#contact"
                  onClick={() => handleClick("contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
