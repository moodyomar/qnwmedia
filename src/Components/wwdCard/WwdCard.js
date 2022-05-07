import './WwdCard.css'
import img from '../../assets/logo.png'
import { getIcon } from '../../utils/iconGetter'

const WwdCard = ({title,subtitle,icon,bg}) => { 

return(

<div className='WwdCard' style={{backgroundImage:`url(${bg})`}}>
    <div className="bg-overlay"></div>
    <div className="icon"
    data-aos={`zoom-in-down`} data-aos-duration="1250">{getIcon(icon)}</div>
<h1 data-aos={`fade-in`} data-aos-duration="1000">{title}</h1>
<h4 data-aos={`fade-in`} data-aos-duration="3000">{subtitle}</h4>
</div>

)
}

export default WwdCard