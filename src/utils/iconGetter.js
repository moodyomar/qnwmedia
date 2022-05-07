import {FaShoppingCart,FaAlignLeft,FaQuestionCircle,FaTablet,FaTable,FaStickyNote,FaInstagram} from "react-icons/fa"
import {AiOutlinePieChart,AiOutlineFileDone} from "react-icons/ai"
import {MdImportantDevices} from "react-icons/md"
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
  
    case 'webdesign':
      return <FaTablet size={size}/>
  
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


  
    default:
      break;
  }
}