import HeroCard from '../../Components/HeroCard/HeroCard'
import './Hero.css'


const Hero = ({language}) => { 
const {h1,p,button,cards} = language.hero;
return(
<>
<div className='Hero flex-center'>
<h1>{h1}</h1>
<p>{p}</p>
<button>{button}</button>
</div>
<div className="Cards flex-center">
{cards.map(card => <HeroCard num={card.num} title={card.title} 
desc={card.desc} color={card.color}/>)}
</div>
</>

)
}

export default Hero