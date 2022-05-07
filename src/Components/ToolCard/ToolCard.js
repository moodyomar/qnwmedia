import './ToolCard.css'


const ToolCard = ({title,desc,icon,dir}) => { 

return(

<div className='ToolCard'
data-aos={`fade-${dir}`} data-aos-duration="1800">
<img src={icon} alt="QNW Media Tools" className="toolIcon" />
<h2>{title}</h2>
<p>{desc}</p>
</div>

)
}

export default ToolCard