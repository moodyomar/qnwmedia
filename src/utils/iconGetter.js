import {FaShoppingCart,FaAlignLeft,FaQuestionCircle,FaTablet,FaTable,FaStickyNote} from "react-icons/fa"
import {HiCode,} from "react-icons/hi"


export const getIcon = (tool) => {
  let size = 40;
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


  
    default:
      break;
  }
}