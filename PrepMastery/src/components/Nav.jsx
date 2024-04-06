import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./Login";
import LogoutButton from "./Logout";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();

  const [onHomepage, setonHomepage] = useState(true);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (location.pathname !== "/") {
      setonHomepage(false);
    }
  }, [location, navigate]);

  const handleHomeButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar bg-yello">
      {onHomepage ? (
        <>
          <div className="navbar-start">
            <div className="px-5 text-3xl ">
              <span className=" font-bold">Prep</span>
              <span className="text-secondary font-semibold">Mastery</span>
            </div>
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                <AnchorLink href="#about">About Us</AnchorLink>
                </li>
                <li>
                  <a>Tracks</a>
                  <ul className="p-2">
                    <li>
                    <a href="TCShome">TCS</a>
                    </li>
                    <li>
                      <a href="TechMhome">Tech Mahindra</a>
                    </li>
                    <li>
                    <a href="HSBChome">HSBC</a>
                    </li>
                  </ul>
                </li>
                <li>
                <AnchorLink href="#contact">Contact Us</AnchorLink>
                </li>
              </ul>
            </div>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <AnchorLink href="#home">Home</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#about">About Us</AnchorLink>
              </li>
              <li>
                <AnchorLink href="#contact">Contact Us</AnchorLink>
              </li>
              <li>
                <details>
                  <summary>Tracks</summary>
                  <ul className="p-2">
                    <li>
                      <a href="TCShome">TCS</a>
                    </li>
                    <li>
                      <a href="TechMhome">Tech Mahindra</a>
                    </li>
                    <li>
                      <a href="HSBChome">HSBC</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className="navbar-start">
          <div className="px-5 text-3xl">
            <span className=" font-bold">Prep</span>
            <span className="text-secondary font-semibold">Mastery</span>
          </div>
        </div>
      )}

      <div className="navbar-end">
        {!onHomepage ? (
          <>
            <button
              className="btn btn-primary ml-96 m-3"
              onClick={handleHomeButtonClick}
            >
              Home
            </button>
            <Link to="/login">
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </Link>
          </>
        ) : (
          <Link to="/login">
            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
