import style from "./footer.module.scss"
import { NavLink } from "react-router-dom"
export const Footer = () => {
return(
<div>
<footer className={style.footerStyle}>
<ul>
<li>    
        <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/hotels">Hoteller & Destinationer</NavLink>
    
        </li>
        <li>
        
          <NavLink to="/rooms">Værelser</NavLink>
        </li>
        <li>
        
          <NavLink to="/reservation">Reservation</NavLink>
        </li>
        <li>
          
          <NavLink to="/login">Login</NavLink>
        </li>  
</ul>

</footer>


</div>

)
}