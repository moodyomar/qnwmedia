import { getIcon } from '../../utils/iconGetter'
import './ServiceCard.css'

const ServiceCard = ({icon,title,desc,dir}) => { 

return(

<div className='ServiceCard' 
data-aos={`fade-${dir}`} data-aos-duration="1500">
<div className="serviceIcon">{getIcon(icon)}</div>
<h2>{title}</h2>
<p>{desc}</p>
</div>

)
}

export default ServiceCard