
import WwdCard from '../../Components/wwdCard/WwdCard'
import './Whatwedo.css'


const Whatwedo = ({language}) => { 
const {cards} = language.whatwedo;
return(

<div className='Whatwedo flex-center section'>
{cards.map(card => (
    <WwdCard title={card.h1} subtitle={card.h4}
     icon={card.icon} bg={card.bg}/>
))}
</div>

)
}

export default Whatwedo