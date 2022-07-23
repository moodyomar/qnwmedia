import { NavItems } from '../../Components/Navbar/NavItems';
import { GrMailOption,GrMapLocation, GrList} from 'react-icons/gr';
import logo from '../../assets/qoq-white.webp'
import './Footer.css'


const Footer = ({language}) => { 
    const {menu} = language;
return(

<div className='Footer cwhite'>
<div className="footer-col1 col">
    <img src={logo} alt="" />
</div>
<div className="footer-col2 col">
    <GrMailOption size={30}/>
    <div className="span">
    info@qnwmedia.com
    </div>
</div>
<div className="footer-col3 col">
    <GrMapLocation size={30}/>
    <div className="span">
    ביר אלמכסור, 17925
    </div>
</div>
<div className="footer-col4 col">
    <GrList size={30} />
   <div className="span">
   <NavItems menu={menu}/>
   </div>
</div>
<div className="footer-bottom">© 2020 — 2021 by <span> QNW Media.</span> All Rights Reserved.</div>
</div>

)
}

export default Footer