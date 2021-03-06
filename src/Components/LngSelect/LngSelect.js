import {useEffect,useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import {Link} from 'react-router-dom';
import bg from '../../assets/lng-bg.webp'
import logo from '../../assets/qoq-white.webp'
import './LngSelect.css'
import {SocialIcons} from '../../Components'


const LngSelect = ({lng}) => { 

const {changeLang,language} = useContext(LanguageContext);

useEffect(() => {

console.log('langauge eff');
console.log(language);

},[language] )

return(

<div className='LngSelect cwhite' style={{backgroundImage:`url(${bg})`}}>
    <div className="bg-overlay"></div>
    <img src={logo} alt="" />
    <SocialIcons language={lng}/>
    <div className="row">
<Link to="/home" className="arabic" onClick={() => changeLang('ar')}
data-aos={`fade-right`} data-aos-duration="1250">عربي</Link>
<Link to="/home" className="hebrew" onClick={() => changeLang('he')}
data-aos={`fade-left`} data-aos-duration="1250">עברית</Link>
    </div>
</div>

)
}

export default LngSelect