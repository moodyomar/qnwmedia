import { SectionHeading } from '../../Components'
import './Whorwe.css'


const Whorwe = ({language}) => { 
const {p,h2,desc} = language.whorwe
return(

<div className='Whorwe flex-center section'>
<SectionHeading p={p} h2={h2} />
<p>{desc}</p>
</div>

)
}

export default Whorwe