import { AiOutlineBell,AiOutlineHome} from "react-icons/ai";
import { BiRadio,BiTv } from "react-icons/bi";
import { IoRocketOutline } from "react-icons/io5"
import React ,{useState} from "react"
import './Mobilenav.css';


const style = { color:"grey", fontSize: "24px",
opacity: 0.4 }
const active = { color:"#3E2AD1", fontSize: "24px", }
const style1 = { color: "#FFFFFF", fontSize: "22px" }
function MobileNav() {
  const [activeClass,setActiveClass] = useState(false)

 const doSetActiveClass = () =>{
    setActiveClass(true)
  }
  console.log(activeClass);
  return (
    <nav className="nav">
      <div className="explore">
        <IoRocketOutline style={style1}/>
      </div>
       <div className="nav-icons">
   <ul className="nav-menu">
   <li className={((activeClass) ? "active": {style})} onClick={doSetActiveClass} > <AiOutlineHome /></li>
   <li className={((activeClass) ? "active": {style})} onClick={doSetActiveClass}><BiTv  /></li>
   <li className={((activeClass) ? "active": {style})} onClick={doSetActiveClass}><BiRadio  /></li>
   <li className={((activeClass) ? "active": {style})} onClick={doSetActiveClass}><AiOutlineBell  /></li>
   </ul>  
    </div>

   
    </nav>
  );
}

export default MobileNav;
