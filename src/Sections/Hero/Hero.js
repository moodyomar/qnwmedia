import HeroCard from '../../Components/HeroCard/HeroCard'
import './Hero.css'


const Hero = ({language}) => { 
const {h1,p,button,cards} = language.hero;
return(
<>
<div className='Hero flex-center'>
    <div className="bg-overlay"></div>
<h1 data-aos="zoom-in-down" data-aos-duration="2000">{h1}</h1>
<p data-aos="fade-up" data-aos-duration="2500">{p}</p>
<button data-aos="fade-up" data-aos-duration="2500">{button}</button>
</div>
<div className="Cards flex-center">
{cards.map(card => <HeroCard num={card.num} title={card.title} 
desc={card.desc} color={card.color}/>)}
</div>
</>

)
}

export default Hero