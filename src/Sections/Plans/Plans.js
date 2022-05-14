import { PlanCard,SectionHeading } from '../../Components';
import './Plans.css'


const Plans = ({language}) => { 
    const {p,h2,cards} = language.plans;
return(

<div className='Plans flex-center section'>
<SectionHeading p={p} h2={h2}/>
<div className="cards">
    {cards.map((card,i) => (
    <PlanCard sub={card.sub} title={card.title}
    price={card.price} features={card.features}
    webprice={card.webprice} key={i}/>
))}
</div>
</div>

)
}

export default Plans