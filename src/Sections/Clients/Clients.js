import { ClientFavicon, SectionHeading } from '../../Components'
import './Clients.css'


const Clients = ({language}) => { 
const {p,h2,clients} = language.clients;
return(

<div className='Clients flex-center section'>
<SectionHeading p={p} h2={h2}/>
{clients.map(client => (
    <ClientFavicon name={client.name} website={client.website}
    favicon={client.favicon} placment={client.placment}/>
))}
</div>

)
}

export default Clients