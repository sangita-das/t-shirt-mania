import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
       <nav className='header'>
        <Link to='/'> Home </Link>
        <Link to='/Orders'>Orders</Link>
        <Link to = '/about'> About </Link>
        <Link to='/grandpa'>Grandpa</Link>
       </nav>
    );
};

export default Header;