import './HeroCard.css'


const HeroCard = ({num,title,desc,color}) => { 

return(

<div className='HeroCard' style={{borderBottom:`3px solid ${color}`}}
data-aos={`fade-up`} data-aos-duration="1500">
    <span className="num">{num}</span>
<h2>{title}</h2>
<p>{desc}</p>
</div>

)
}

export default HeroCard