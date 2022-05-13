import { SectionHeading, ToolCard } from '../../Components';
import './Tools.css'


const Tools = ({language}) => { 
    const {p,h2,cards} = language.tools;
return(

<div className='Tools flex-center section'>
<SectionHeading p={p} h2={h2}/>
<div className="cards">
    {cards.map((card,i) => (
    <ToolCard key={i} icon={card.icon} title={card.title}
    desc={card.desc} dir={card.dir}/>
))}
</div>
</div>

)
}

export default Tools