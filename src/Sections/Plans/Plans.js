import { PlanCard,SectionHeading } from '../../Components';
import './Plans.css'


const Plans = ({language}) => { 
    const {p,h2,cards,disclaimer,btnMsg} = language.plans;
return(

<div className='Plans flex-center section' id="2">
<SectionHeading p={p} h2={h2}/>
<div className="cards">
    {cards.map((card,i) => (
    <PlanCard card={card} msg={disclaimer} btnMsg={btnMsg} key={i}/>
))}
</div>
</div>

)
}

export default Plans