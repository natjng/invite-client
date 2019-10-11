import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <NavLink 
                to="/"
                style={{ marginRight: '10px' }}
                activeStyle={{
                    fontWeight: "bold"
                }} 
            >
                Home
            </NavLink>
            <NavLink 
                to="/events"
                style={{ marginRight: '10px' }}
                activeStyle={{
                    fontWeight: "bold"
                }}
            >
                Events
            </NavLink>
            <NavLink to="/">
                Profile
            </NavLink>
        </div>
    )
}

export default NavBar;