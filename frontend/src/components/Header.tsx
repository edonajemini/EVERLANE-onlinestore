import logo from "../assets/logo.png";
export function Header(){
    return(
        <>
        <ul>
        <li className="logo">
       <a href="/homepage"> <img src={logo} width="100px" alt="indeed-logo" /> </a>
      </li>
        </ul>
        </>
    )
}