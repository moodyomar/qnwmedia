import './Navbar.css'
import React, { useState } from 'react';
import {RiMenuLine,RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/longlogo.png'
import {NavItems} from './NavItems'
import { useEffect } from 'react/';


const Navbar = ({language}) => { 

    const {menu} = language;
    let [toggleMenu,setToggleMenu] = useState(false);
    let y = window.scrollY;


    useEffect(() => {
    window.addEventListener("scroll", (e) => setToggleMenu(false));
    },[y] )

return(

<nav className='Navbar bgc-white'>
<img src={logo} alt="QNW Media" className="logo"
data-aos="fade-right" data-aos-duration="1500" />
<div className="links">
<NavItems menu={menu}/>
</div>
<div className="mobile-nav">
{!toggleMenu
? <RiMenuLine size={30} onClick={() => setToggleMenu(true)}
data-aos="fade-left" data-aos-duration="1500" />
: <RiCloseLine size={30} onClick={() => setToggleMenu(false)}
data-aos="zoom-in" data-aos-duration="500" />
}

<div className={`mobile-links bgc-white ${toggleMenu ? 'fade-in-top' : 'fade-in-bottom'}`}>
<NavItems menu={menu}/>
</div>

</div>
</nav>

)
}

export default Navbar