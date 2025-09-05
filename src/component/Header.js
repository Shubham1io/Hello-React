import {LOGO_LINK} from "../utils/constants"
import { useState } from "react";

const Header = () => {

    const[btnNameReact,setbtnNameReact] = useState("login");

    return (
        <div className="header">
            <div className="logo">
                <img className="image" src={LOGO_LINK} />
            </div>

            <div className="nav-list">
                <ul>
                    <li>Home</li>
                    <li>Contact</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={()=>{

                        btnNameReact === "login"
                        ? setbtnNameReact("logout")
                        : setbtnNameReact("login");
                    }}
                    
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>

    )
};

export default Header;