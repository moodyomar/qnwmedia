import './Services.css'
import qnwIg from '../../assets/images/qnw-instagram.png'
import { AiFillCheckCircle } from 'react-icons/ai';


const Services = ({language}) => { 
const {h2,features} = language.services;
return(

<div className='Services flex-center'>
<h2>{h2}</h2>
<img src={qnwIg} alt="QNW Media Instagram" />
<div className="features">
    {features.map(feature => (
<span className="feature">{feature} <AiFillCheckCircle size={30}/></span>
    ))}
</div>
</div>

)
}

export default Services