import './PlanCard.css'


const PlanCard = ({sub,title,price,features,webprice}) => { 

return(

<div className='PlanCard'
data-aos={`zoom-in`} data-aos-duration="1500">
<p className='plan-title'>{title}</p>
<h2 className='plan-price'>{price}</h2>
<ul className='features-list'>
    {features.map(feature => (
        <li className='plan-feature'>{feature}</li>
    ))}
</ul>
<span className='plan-alert'>לא כולל הקמת אתר</span>
<div className="webprice">( ₪{webprice} )</div>
<button>הירשם כמוני</button>
</div>

)
}

export default PlanCard