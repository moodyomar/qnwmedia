import './HeroCard.css'


const HeroCard = ({num,title,desc,color}) => { 

return(

<div className='HeroCard' style={{borderBottom:`3px solid ${color}`}}>
    <span className="num">{num}</span>
<h2>{title}</h2>
<p>{desc}</p>
</div>

)
}

export default HeroCard