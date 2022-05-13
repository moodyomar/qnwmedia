import { SectionHeading } from '../../Components'
import './Clients.css'


const Clients = ({language}) => { 
const {p,h2,clients} = language.clients;
return(

<div className='Clients flex-center section'>
<SectionHeading p={p} h2={h2}/>
</div>

)
}

export default Clients