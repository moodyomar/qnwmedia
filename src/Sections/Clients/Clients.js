import { ClientFavicon, SectionHeading } from '../../Components'
import './Clients.css'


const Clients = ({language}) => { 
const {p,h2,clients,previews} = language.clients;
return(

<div className='Clients flex-center section'>
<SectionHeading p={p} h2={h2}/>
{clients.map((client,i) => (
    <ClientFavicon name={client.name} website={client.website}
    favicon={client.favicon} placment={client.placment} key={i}/>
))}
<div className="clients-slider">
    <img src={previews[0]} alt="" />
</div>
</div>

)
}

export default Clients