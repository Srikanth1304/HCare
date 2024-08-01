import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'
const Header = () => {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <Link to="/CompA">CompA</Link>
        </li>
        <li>
          <Link to="/CompB">CompB</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
