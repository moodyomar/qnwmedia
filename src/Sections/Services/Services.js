import './Services.css'
import qnwIg from '../../assets/images/qnw-instagram.png'
import { AiFillCheckCircle } from 'react-icons/ai';


const Services = ({language}) => { 
const {h2,features} = language.services;
return(

<div className='Services flex-center section'>
<h2 className='sectionTitle'>{h2}</h2>
<img src={qnwIg} alt="QNW Media Instagram"
 data-aos="fade-right" data-aos-duration="2000" />
<div className="features"
data-aos="fade-down" data-aos-duration="2000">
    {features.map(feature => (
<span className="feature">{feature} <AiFillCheckCircle size={30}/></span>
    ))}
</div>
</div>

)
}

export default Services