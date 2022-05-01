import './ServiceCard.css'

const ServiceCard = ({icon,title,desc}) => { 

return(

<div className='ServiceCard'>
<img src={icon} alt="QNW Media Service" className="serviceIcon" />
<h2>{title}</h2>
<p>{desc}</p>
</div>

)
}

export default ServiceCard