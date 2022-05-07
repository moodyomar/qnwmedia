import './Navbar.css'
import React, { useState } from 'react';
import {RiMenuLine,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/longlogo.png'
import {NavItems} from './NavItems'


const Navbar = () => { 

    let [toggleMenu,setToggleMenu] = useState(false);

return(

<nav className='Navbar'>
<img src={logo} alt="QNW Media" className="logo"
data-aos="fade-right" data-aos-duration="1500" />
<div className="links">
    <NavItems/>
</div>
<div className="mobile-nav"
data-aos="fade-left" data-aos-duration="1500">
{!toggleMenu
? <RiMenuLine size={30} onClick={() => setToggleMenu(true)} />
: <RiCloseLine size={30} onClick={() => setToggleMenu(false)} />
}

<div className={`mobile-links ${toggleMenu ? 'fade-in-top' : 'fade-in-bottom'}`}>
<NavItems/>
</div>

</div>
</nav>

)
}

export default Navbar