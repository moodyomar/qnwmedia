import './Services.css'
import qnwIg from '../../assets/images/qnw-instagram.png'
import { AiFillCheckCircle } from 'react-icons/ai';
import { ServiceCard } from '../../Components'


const Services = ({language}) => { 
const {sh2,features,p,wh2,cards} = language.services;
return(

<div className='Services flex-center section'>
<h2 className='sectionTitle'>{sh2}</h2>
<img src={qnwIg} className="igimg" alt="QNW Media Instagram"
 data-aos="fade-right" data-aos-duration="2000" />
<div className="features"
data-aos="fade-down" data-aos-duration="2000">
    {features.map(feature => (
<span className="feature">{feature} <AiFillCheckCircle size={30}/></span>
    ))}
</div>
<p className='subtitle'>{p}</p>
<h2 className='sectionTitle'>{wh2}</h2>
{cards.map(card => (
    <ServiceCard icon={card.icon} title={card.title}
    desc={card.description} dir={card.dir}/>
))}
</div>

)
}

export default Services