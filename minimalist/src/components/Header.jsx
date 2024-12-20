import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 400);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="header-container">
      <header className="header">
        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
          <path
            fill="#33323D"
            fillRule="evenodd"
            d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z"
          />
        </svg>
        {isMobile ? (
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
              width="24"
              height="13"
            >
              <g fill="#33323D" fill-rule="evenodd">
                <path d="M0 0h24v1H0zM0 6h24v1H0zM0 12h24v1H0z" />
              </g>
            </svg>
            {isModalOpen && (
              <div className="mobile-nav">
                <Link
                  to="/"
                  className={currentPath === "/" ? "active-link" : ""}
                >
                  HOME
                </Link>
                <Link
                  to="/portfolio"
                  className={currentPath === "/portfolio" ? "active-link" : ""}
                >
                  PORTFOLIO
                </Link>
                <Link
                  to="/contact"
                  className={currentPath === "/contact" ? "active-link" : ""}
                >
                  CONTACT ME
                </Link>
              </div>
            )}
          </div>
        ) : (
          <nav className="nav-links">
            <Link to="/" className={currentPath === "/" ? "active-link" : ""}>
              HOME
            </Link>
            <Link
              to="/portfolio"
              className={currentPath === "/portfolio" ? "active-link" : ""}
            >
              PORTFOLIO
            </Link>
            <Link
              to="/contact"
              className={currentPath === "/contact" ? "active-link" : ""}
            >
              CONTACT ME
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
}
