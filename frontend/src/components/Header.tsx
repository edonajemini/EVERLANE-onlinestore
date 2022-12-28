import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import {  CiSearch } from "react-icons/ci";
import {  RxPerson } from "react-icons/rx";
import {  AiOutlineShoppingCart } from "react-icons/ai";

export function Header(){
    return(
        <div className="header">
        <ul className="header-list">
            <li>
            <NavLink  to={"/women"}>Women</NavLink>
            </li>
            <li>
            <NavLink  to={"/men"}>Men</NavLink>
            </li>
            <li>
            <NavLink  to={"/about"}>About</NavLink>
            </li>
            <li>
            <NavLink  to={"/stories"}>Stories</NavLink>
            </li>
        </ul>
       
        <ul className="header-icons">
            <li> <CiSearch/> </li>
            <li>
                <RxPerson/>
            </li>
            <li> 
                <AiOutlineShoppingCart/>
            </li>
        </ul>
        </div>
    )
}