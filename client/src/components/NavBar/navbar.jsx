import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setcurrentuser } from '../../action/currentuser';
import { jwtDecode } from 'jwt-decode';

import bars from '../../assets/bars-solid.svg';
import logo from '../../assets/logo.png';
import search from '../../assets/search-solid.svg';
import Avatar from '../Avatar/Avatar';

import './navbar.css';

function Navbar({ handleslidein }) {
  const User = useSelector((state) => state.currentuserreducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Function to handle logout
  const handlelogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/');
    dispatch(setcurrentuser(null));
  };

  // Effect to check token expiration and manage user state
  useEffect(() => {
    const token = User?.token;

    const handleLogoutFunc = () => {
      dispatch({ type: 'LOGOUT' });
      navigate('/');
      dispatch(setcurrentuser(null));
    };

    if (token) {
      const decodedtoken = jwtDecode(token);
      if (decodedtoken.exp * 1000 < new Date().getTime()) {
        handleLogoutFunc();
      }
    }

    // Set current user from local storage
    const profile = JSON.parse(localStorage.getItem('Profile'));
    dispatch(setcurrentuser(profile));
  }, [User?.token, dispatch, navigate]);

  return (
    <nav className="main-nav">
      <div className="navbar">
        {/* Button to handle slide in */}
        <button className="slide-in-icon" onClick={() => handleslidein()}>
          <img src={bars} alt="bars" width="15" />
        </button>
        <div className="navbar-1">
          {/* Logo link */}
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" />
          </Link>
          {/* Navigation links */}
          <Link to="/" className="nav-item nav-btn res-nav">
            About
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            Products
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav">
            For Teams
          </Link>
          {/* Search form */}
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" width="18" className="search-icon" />
          </form>
        </div>
        <div className="navbar-2">
          {/* Conditional rendering for logged in/out users */}
          {User === null ? (
            // Link to login page
            <Link to="/Auth" className="nav-item nav-links">
              Log in
            </Link>
          ) : (
            // Display user avatar and logout button
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: 'white', textDecoration: 'none' }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button className="nav-item nav-links" onClick={handlelogout}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;