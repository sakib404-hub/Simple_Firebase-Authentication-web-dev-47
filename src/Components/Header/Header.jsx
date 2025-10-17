import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <nav className='p-4 bg-base-300 shadow-md my-10'>
            <NavLink to='/'>Home</NavLink>
        </nav>
    );
};

export default Header;