import { PlanCard } from '../../Components';
import './Plans.css'


const Plans = ({language}) => { 
    const {p,h2,cards} = language.plans;
return(

<div className='Plans flex-center section'>
<p className='subtitle'>{p}</p>
<h2 className='sectionTitle'>{h2}</h2>
<div className="cards">
    {cards.map((card,i) => (
    <PlanCard sub={card.sub} title={card.title}
    price={card.price} features={card.features}
    webprice={card.webprice}/>
))}
</div>
</div>

)
}

export default Plans