import { ClientFavicon, SectionHeading, Swiper } from '../../Components'
import './Clients.css'


const Clients = ({language}) => { 
const {p,h2,clients,previews} = language.clients;
return(

<div className='Clients flex-center section' id="3">
<SectionHeading p={p} h2={h2}/>
<div className="favicons">
{clients.map((client,i) => (
    <ClientFavicon name={client.name} website={client.website}
    favicon={client.favicon} placment={client.placment} key={i}/>
))}
</div>
<div className="clients-slider" id='4'>

<Swiper slides={previews} />
</div>
</div>

)
}

export default Clients