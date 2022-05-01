import { ServiceCard } from '../../Components'
import './Whatwedo.css'


const Whatwedo = ({language}) => { 
    const {p,h2,cards} = language.whatwedo;
return(

<div className='Whatwedo flex-center section'>
<p className='subtitle'>{p}</p>
<h2 className='sectionTitle'>{h2}</h2>
{cards.map(card => (
    <ServiceCard icon={card.icon} title={card.title}
    desc={card.description}/>
))}
</div>

)
}

export default Whatwedo