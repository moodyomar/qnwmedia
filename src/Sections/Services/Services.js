import './Services.css'
import { AiFillCheckCircle } from 'react-icons/ai';
import { SectionHeading, ServiceCard } from '../../Components'


const Services = ({language}) => { 
const {sh2,features,p,wh2,cards} = language.services;
return(

<div className='Services flex-center section'>
<h2 className='sectionTitle'>{sh2}</h2>
<img src={'images/qnw-instagram.png'} className="igimg" alt="QNW Media Instagram"
 data-aos="fade-right" data-aos-duration="2000" />
<div className="features">
    {features.map((feature,i) => (
<span key={i} className="feature"
data-aos="fade-left" data-aos-duration={`${feature.speed}`}>
    {feature.title} <AiFillCheckCircle size={30}/></span>
    ))}
</div>
<SectionHeading p={p} h2={wh2}/>
{cards.map((card,i) => (
    <ServiceCard key={i} icon={card.icon} title={card.title}
    desc={card.description} dir={card.dir}/>
))}
</div>

)
}

export default Services