import { ContactForm, SocialIcons } from '../../Components'
import {AiFillMessage} from "react-icons/ai"

import './Contact.css'


const Contact = ({language}) => { 
    const {p,h2,bg} = language.contact;
return(

<div className='Contact flex-center section cwhite' style={{backgroundImage:`url(${bg})`}} id="5">
<div className="bg-overlay"></div>
<AiFillMessage className='sms' size="45" />
<h2 className='cwhite'>{p}</h2>
<p className='cwhite'>{h2}</p>
<SocialIcons language={language}/>
<ContactForm language={language} />
<div className="map">
    MAP will be here
</div>
</div>

)
}

export default Contact