import './ServiceCard.css'

const ServiceCard = ({icon,title,desc,dir}) => { 

return(

<div className='ServiceCard' 
data-aos={`fade-${dir}`} data-aos-duration="1500">
<img src={icon} alt="QNW Media Service" className="serviceIcon" />
<h2>{title}</h2>
<p>{desc}</p>
</div>

)
}

export default ServiceCard