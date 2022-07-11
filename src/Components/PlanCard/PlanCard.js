import './PlanCard.css'


const PlanCard = ({card:{sub,title,price,features,webprice,buylink}
    ,btnMsg,msg}) => { 

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
<button className='scale-in-center sub-btn'>
    <a href={buylink} target="_blank" rel="noreferrer">{btnMsg}</a>
</button>
</div>

)
}

export default PlanCard