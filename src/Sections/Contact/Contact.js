import { ContactForm } from '../../Components'
import {getIcon} from '../../utils/iconGetter'
import {AiFillMessage} from "react-icons/ai"

import './Contact.css'


const Contact = ({language}) => { 
    const {p,h2,socialIcons,bg} = language.contact;
return(

<div className='Contact flex-center section cwhite' style={{backgroundImage:`url(${bg})`}} id="5">
<div className="bg-overlay"></div>
<AiFillMessage className='sms' size="45" />
<h2 className='cwhite'>{p}</h2>
<p className='cwhite'>{h2}</p>
<div className="social-icons flex-center">
{socialIcons.map((icon,i) => (
    <a key={i} className="icon" href={icon.link} target="_blank"
    rel="noreferrer" style={{backgroundColor:icon.color}}>
        {getIcon(icon.name)}
    </a>
) )}
</div>
<ContactForm language={language} />
<div className="map">
    MAP will be here
</div>
</div>

)
}

export default Contact