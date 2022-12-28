import { Link, NavLink } from "react-router-dom";
import flaguk from "../assets/flaguk.webp";

export function Bussines(){
    return(
    <div className="bussines">
     <ul className="bussines-nav">
            <NavLink  to={"/bussiness"}>For Businesses |</NavLink>
            <p><u><Link  to={"/help"}>Help</Link></u></p>
            <p>English </p>
            <img src={flaguk} width="18px" alt="uk-flag" />
          </ul>
    </div>
    )
}