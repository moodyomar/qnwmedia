import {FaShoppingCart,FaAlignLeft,FaFacebook,FaQuestionCircle,FaTable,FaStickyNote,FaInstagram} from "react-icons/fa"
import {AiOutlinePieChart,AiOutlineFileDone,AiFillInstagram} from "react-icons/ai"
import {MdImportantDevices} from "react-icons/md"
import {TiSocialInstagram} from "react-icons/ti"
import {RiWhatsappFill} from "react-icons/ri"
import {HiLightBulb,HiShoppingBag} from "react-icons/hi"


import {HiCode,} from "react-icons/hi"


export const getIcon = (tool) => {
  let size = 45;
  switch (tool) {
    case 'cart':
      return <FaShoppingCart size={size}/>
  
    case 'seo':
      return <FaAlignLeft size={size}/>
  
    case 'develop':
      return <HiCode size={size}/>
  
    case 'socialmedia':
      return <TiSocialInstagram size={size}/>
  
    case 'hosting':
      return <FaTable size={size}/>
  
    case 'maintenance':
      return <FaQuestionCircle size={size}/>
  
    case 'copywriting':
      return <FaStickyNote size={size}/>
  
    case 'design':
      return <MdImportantDevices size={size}/>
  
    case 'media':
      return <FaInstagram size={size}/>
  
    case 'marketing':
      return <AiOutlinePieChart size={size}/>
  
    case 'solutions':
      return <AiOutlineFileDone size={size}/>

    case 'idea':
      return <HiLightBulb size={size}/>

    case 'online':
      return <HiShoppingBag size={size}/>

    case 'IG':
      return <AiFillInstagram size={35}/>

    case 'WSP':
      return <RiWhatsappFill size={35}/>

    case 'FB':
      return <FaFacebook size={35}/>


  
    default:
      break;
  }
}