import './ToolCard.css'
import {getIcon} from '../../utils/iconGetter'

const ToolCard = ({title,desc,icon,dir}) => { 

return(

<div className='ToolCard'
data-aos={`fade-${dir}`} data-aos-duration="1500">
<div className="toolIcon">{getIcon(icon)}</div>
<h2>{title}</h2>
<p>{desc}</p>
</div>

)
}

export default ToolCard