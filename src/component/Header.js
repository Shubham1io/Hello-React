import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { LOGO_LINK } from "../utils/constants";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const[btnNameReact,setbtnNameReact] = useState("login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    // subscribing to the store using selector
    const cartItems = useSelector((store)=>store.cart.items);    

    return (
        <div className="flex justify-between bg-green-100 shadow-lg">
            <div className="logo">
                <img className="w-40" src={LOGO_LINK} />
            </div>

            <div className="flex items-center">
                <ul className="flex p-4 m-4 items-center">
                    <li className="px-4 hover:shadow-md">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 hover:shadow-md">
                        Online status: {onlineStatus? "✅" :"🔴"}
                    </li>
                    <li className="px-4 hover:shadow-md">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 hover:shadow-md">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-4 hover:shadow-md">
                        <Link to="/About">About Us</Link>
                    </li>
                    <li className="px-4 hover:shadow-md">
                        <Link to="/cart">🛒Cart({cartItems.length})</Link>
                    </li>


                    <button className="login w-45 h-10 p-2 bg-white hover:shadow-md"
                    onClick={()=>{

                        btnNameReact === "login"
                        ? setbtnNameReact("logout")
                        : setbtnNameReact("login");
                    }}
                    
                    >{btnNameReact}</button>
                    <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>

    )
};

export default Header;