import './PlanCard.css'


const PlanCard = ({sub,title,price,features,webprice,msg,btnMsg}) => { 

return(

<div className='PlanCard'
data-aos={`zoom-in`} data-aos-duration="1500">
<p className='plan-title'>{title}</p>
<h2 className='plan-price'><span className='shekel'>₪</span>{price}<span className='plan-period'>{sub}</span></h2>
<ul className='features-list'>
    {features.map((feature,i) => (
        <li key={i} className='plan-feature'>{feature}</li>
    ))}
</ul>
<span className='plan-alert'>{msg}</span>
<div className="webprice">( ₪{webprice} )</div>
<button>{btnMsg}</button>
</div>

)
}

export default PlanCard