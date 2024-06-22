
import React from 'react';
import './leftside.css'; // Import CSS file for styling
import { NavLink } from 'react-router-dom'; // Import NavLink for navigation
import Globe from "../../assets/Globe.svg"; // Import Globe icon from assets

const Leftsidebar = ({ slidein }) => {
    // Define styles for sliding animation
    const slideinstyle = {
        transform: "translateX(0%)",
    };
    const slideoutstyle = {
        transform: "translateX(-100%)",
    };

    return (
        <div className="left-sidebar" style={slidein ? slideinstyle : slideoutstyle}>
            {/* Navigation section */}
            <nav className='side-nav'>
                {/* Home button */}
                <button className="nav-btnn">
                    <NavLink to='/' className={({ isActive }) => isActive ? "side-nav-links active" : "side-nav-links"}>
                        <p>Home</p>
                    </NavLink>
                </button>
                {/* Public section */}
                <div className="side-nav-div">
                    <div>
                        <p>PUBLIC</p>
                    </div>
                    {/* Questions button */}
                    <button className='nav-btnn'>
                        <NavLink to='/Question' className={({ isActive }) => isActive ? "side-nav-links active" : "side-nav-links"}>
                            <img src={Globe} alt="globe" /> {/* Globe icon */}
                            <p style={{ paddingLeft: '10px' }}>Questions</p> {/* Questions text */}
                        </NavLink>
                    </button>
                    {/* Tags button */}
                    <button className='nav-btnn'>
                        <NavLink to='/Tags' className={({ isActive }) => isActive ? "side-nav-links active" : "side-nav-links"} style={{ paddingLeft: "40px" }}>
                            <p>Tags</p> {/* Tags text */}
                        </NavLink>
                    </button>
                    {/* Users button */}
                    <button className='nav-btnn'>
                        <NavLink to='/Users' className={({ isActive }) => isActive ? "side-nav-links active" : "side-nav-links"} style={{ paddingLeft: "40px" }}>
                            <p>Users</p> {/* Users text */}
                        </NavLink>
                    </button>
                </div>
            </nav>
        </div>
    );
}

export default Leftsidebar;
