import React from 'react'
import { Link } from 'react-router-dom';
import LoginButton from './Login';

function Nav() {
  return (
    <div className="navbar bg-yello">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li>
              <a>Tracks</a>
              <ul className="p-2">
                <li><a>TCS</a></li>
                <li><a>HSBC</a></li>
              </ul>
            </li>
            <li><a>About</a></li>
          </ul>
        </div>
        <div className="px-5 text-3xl">
          <span className=" font-bold">Prep</span>
          <span className="text-secondary font-semibold">Mastery</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About Us</a></li>
          <li><a>Contact Us</a></li>
          <li>
            <details>
              <summary>Tracks</summary>
              <ul className="p-2">
                <li><a>TCS</a></li>
                <li><a>HSBC</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
          <Link to='/loginG'>
          <LoginButton/>
          </Link>
      </div>
    </div>
  )
}

export default Nav