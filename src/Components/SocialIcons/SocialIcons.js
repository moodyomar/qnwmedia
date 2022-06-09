import {getIcon} from '../../utils/iconGetter'

const SocialIcons = ({language}) => { 

const {socialIcons} = language.contact;

return(

<div className="social-icons flex-center">
{socialIcons.map((icon,i) => (
    <a key={i} className="icon" href={icon.link} target="_blank"
    rel="noreferrer" style={{backgroundColor:icon.color}}>
        {getIcon(icon.name)}
    </a>
) )}
</div>

)
}

export default SocialIcons