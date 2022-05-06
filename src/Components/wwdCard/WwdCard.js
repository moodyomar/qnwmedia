import './WwdCard.css'


const WwdCard = ({title,subtitle,icon}) => { 

return(

<div className='WwdCard'>
    <div className="bg-overlay"></div>
    <div className="icon">{icon}</div>
<h1>{title}</h1>
<h4>{subtitle}</h4>
</div>

)
}

export default WwdCard