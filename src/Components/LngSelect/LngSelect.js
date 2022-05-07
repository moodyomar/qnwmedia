import {useEffect,useContext } from 'react';
import LanguageContext from '../../context/LanguageContext';
import './LngSelect.css'


const LngSelect = () => { 

const {changeLang,language} = useContext(LanguageContext);

useEffect(() => {

console.log('langauge eff');
console.log(language);

},[language] )

return(

<div className='LngSelect' style={{display:`${language !== ''  && 'none'}`}}
data-aos={`zoom-in`} data-aos-duration="1250">
<div className="arabic" onClick={() => changeLang('arabic')}>عربي</div>
<div className="hebrew" onClick={() => changeLang('hebrew')}>עברית</div>
</div>

)
}

export default LngSelect