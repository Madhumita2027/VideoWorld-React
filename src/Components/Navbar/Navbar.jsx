import React from 'react';
import './Navbar.css'
import menu_icon from '../../assets/menu.png'
import logo from '../../assets/logo.png'


function Navbar() {
    return ( 
        <nav className='flex-div'>
            <div className='nav-left flex-div'>
                <img src={menu_icon} alt='' />
                <img src={logo} alt='' />
            </div>

            <div className='nav-middle flex-div'>
                <input />
            </div>
        </nav>
     );
}

export default Navbar;