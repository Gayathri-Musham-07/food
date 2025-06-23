import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
 return (
  <div className='nav'> 
     <div className="nav-logo"> YuM</div>
       <ul className='nav-menu'>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/pro">Products</Link></li>
         <li><Link to="/contact">Contact</Link></li>
       </ul>
       </div>
 );
}

export default Header;