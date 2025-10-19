import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav className=' flex justify-around items-center p-4 bg-base-300 shadow-md my-10'>
            <NavLink
                to='/'
                className='nav-link'>Home</NavLink>
            <NavLink
                to='login'
                className='nav-link'>Login</NavLink>
        </nav >
    );
};

export default Header;