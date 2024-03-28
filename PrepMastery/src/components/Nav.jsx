import React, { useState }  from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoginButton from './Login';
import LogoutButton from './Logout';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  
  const [onHomepage,setonHomepage] = useState(true);

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  
  
  useEffect(() => {
    if (location.pathname !== '/') {
      setonHomepage(false);
    }
  }, [location, navigate]);
  

  // Function to handle navigation to homepage
  const handleHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="navbar bg-yello">
      {onHomepage ? (
        <>
        <div className="navbar-start">
        <div className="px-5 text-3xl">
          <span className=" font-bold">Prep</span>
          <span className="text-secondary font-semibold">Mastery</span>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><AnchorLink href='#home'>Home</AnchorLink></li>
          <li><AnchorLink href='#about'>About Us</AnchorLink></li>
          <li><AnchorLink href='#contact'>Contact Us</AnchorLink></li>
          <li>
            <details>
              <summary>Tracks</summary>
              <ul className="p-2">
                <li><a href='TCS'>TCS</a></li>
                <li><a href='Accenture'>Accenture</a></li>
                <li><a href='HSBC'>HSBC</a></li>
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
    </div>) 
    }
      
      <div className="navbar-end">
        {
          !onHomepage ? (
            <button className="btn btn-primary ml-96 " onClick={handleHomeButtonClick}>Home</button>
          ) : ( 
          <Link to='/login'>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
          </Link>)
        }
      </div>
    </div>
  );
}

export default Nav;
