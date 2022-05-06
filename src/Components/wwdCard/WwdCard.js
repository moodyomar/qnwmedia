import './WwdCard.css'
// import img from '../../assets/logo.png'

const WwdCard = ({title,subtitle,icon,bg}) => { 

return(

<div className='WwdCard' style={{backgroundImage:`require(url(../.${bg}))`}}>
    <div className="bg-overlay"></div>
    <div className="icon">{icon}</div>
<h1 data-aos={`zoom-in-down`} data-aos-duration="1250">{title}</h1>
<h4 data-aos={`fade-up`} data-aos-duration="1500">{subtitle}</h4>
</div>

)
}

export default WwdCard